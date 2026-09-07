import { create } from 'zustand'
import { ACHIEVEMENTS } from '@/data/achievements'
import { DAILY_QUEST_TEMPLATES } from '@/data/dailyQuestTemplates'
import { createInitialProgress } from '@/services/progressService'
import { findNewlyUnlockedAchievements } from '@/services/achievements'
import { advanceDailyQuests, generateDailyQuests } from '@/services/dailyQuests'
import { reviewSrsItem } from '@/services/srs'
import { recordActivityForStreak } from '@/services/streak'
import { storage } from '@/services/storage'
import { XP_REWARDS } from '@/services/xp'
import { todayDateString } from '@/utils/date'
import type { AchievementDefinition } from '@/types/gamification'
import type { ExamAttempt, UserProgress } from '@/types/progress'

const STORAGE_KEY = 'nihongo-path.progress.v1'
const MIN_ANSWERS_FOR_SESSION_XP = 5

function loadProgress(): UserProgress {
  return storage.load<UserProgress>(STORAGE_KEY) ?? createInitialProgress()
}

/** Отмечает только что открывшиеся достижения и сразу начисляет их бонусный XP. */
function applyAchievementUnlocks(progress: UserProgress): { progress: UserProgress; unlocked: AchievementDefinition[] } {
  const unlocked = findNewlyUnlockedAchievements(ACHIEVEMENTS, progress)
  if (unlocked.length === 0) return { progress, unlocked }

  const unlockedAchievements = { ...progress.unlockedAchievements }
  let bonusXp = 0
  for (const achievement of unlocked) {
    unlockedAchievements[achievement.id] = todayDateString()
    bonusXp += achievement.xpReward
  }
  return { progress: { ...progress, unlockedAchievements, xp: progress.xp + bonusXp }, unlocked }
}

interface ProgressStore {
  progress: UserProgress
  completeLesson: (lessonId: string, xpReward: number) => { xpGained: number; newAchievements: AchievementDefinition[] }
  recordPracticeAnswer: (srsKey: string, isCorrect: boolean) => void
  finishPracticeSession: (totalCount: number) => { xpGained: number; newAchievements: AchievementDefinition[] }
  recordExamAttempt: (
    examId: string,
    attempt: ExamAttempt,
    xpReward: number,
  ) => { xpGained: number; newAchievements: AchievementDefinition[] }
  ensureDailyQuests: () => void
  resetProgress: () => void
}

export const useProgressStore = create<ProgressStore>((set, get) => {
  function persistAndSet(next: UserProgress) {
    storage.save(STORAGE_KEY, next)
    set({ progress: next })
  }

  return {
    progress: loadProgress(),

    completeLesson(lessonId, xpReward) {
      const current = get().progress
      const alreadyDone = current.completedLessons.includes(lessonId)
      const xpGained = alreadyDone ? 0 : xpReward

      let next: UserProgress = {
        ...current,
        completedLessons: alreadyDone ? current.completedLessons : [...current.completedLessons, lessonId],
        xp: current.xp + xpGained,
        streak: recordActivityForStreak(current.streak),
      }

      if (!alreadyDone && next.dailyQuests) {
        const { quests, justCompleted } = advanceDailyQuests(next.dailyQuests.quests, DAILY_QUEST_TEMPLATES, 'lessonsCompleted', 1)
        next = { ...next, dailyQuests: { ...next.dailyQuests, quests }, xp: next.xp + justCompleted.reduce((sum, q) => sum + q.xpReward, 0) }
      }

      const { progress: withAchievements, unlocked } = applyAchievementUnlocks(next)
      persistAndSet(withAchievements)
      return { xpGained, newAchievements: unlocked }
    },

    recordPracticeAnswer(srsKey, isCorrect) {
      const current = get().progress
      const nextSrs = { ...current.srs, [srsKey]: reviewSrsItem(current.srs[srsKey], isCorrect) }
      const mistakeCounts = isCorrect
        ? current.mistakeCounts
        : { ...current.mistakeCounts, [srsKey]: (current.mistakeCounts[srsKey] ?? 0) + 1 }
      const correctCounts = isCorrect
        ? { ...current.correctCounts, [srsKey]: (current.correctCounts[srsKey] ?? 0) + 1 }
        : current.correctCounts

      let next: UserProgress = {
        ...current,
        srs: nextSrs,
        mistakeCounts,
        correctCounts,
        totalAnswered: current.totalAnswered + 1,
        totalCorrect: current.totalCorrect + (isCorrect ? 1 : 0),
        streak: recordActivityForStreak(current.streak),
      }

      if (next.dailyQuests) {
        const { quests } = advanceDailyQuests(next.dailyQuests.quests, DAILY_QUEST_TEMPLATES, 'answers', 1)
        next = { ...next, dailyQuests: { ...next.dailyQuests, quests } }
      }

      persistAndSet(next)
    },

    finishPracticeSession(totalCount) {
      const current = get().progress
      const xpGained = totalCount >= MIN_ANSWERS_FOR_SESSION_XP ? XP_REWARDS.PRACTICE_SESSION : 0
      const next: UserProgress = { ...current, xp: current.xp + xpGained }

      const { progress: withAchievements, unlocked } = applyAchievementUnlocks(next)
      persistAndSet(withAchievements)
      return { xpGained, newAchievements: unlocked }
    },

    recordExamAttempt(examId, attempt, xpReward) {
      const current = get().progress
      const previousAttempts = current.blockExamAttempts[examId] ?? []
      const alreadyPassed = previousAttempts.some((a) => a.passed)
      const xpGained = attempt.passed && !alreadyPassed ? xpReward : 0

      let next: UserProgress = {
        ...current,
        blockExamAttempts: { ...current.blockExamAttempts, [examId]: [...previousAttempts, attempt] },
        xp: current.xp + xpGained,
        streak: recordActivityForStreak(current.streak),
      }

      if (attempt.passed && next.dailyQuests) {
        const { quests, justCompleted } = advanceDailyQuests(next.dailyQuests.quests, DAILY_QUEST_TEMPLATES, 'examsPassed', 1)
        next = { ...next, dailyQuests: { ...next.dailyQuests, quests }, xp: next.xp + justCompleted.reduce((sum, q) => sum + q.xpReward, 0) }
      }

      const { progress: withAchievements, unlocked } = applyAchievementUnlocks(next)
      persistAndSet(withAchievements)
      return { xpGained, newAchievements: unlocked }
    },

    ensureDailyQuests() {
      const current = get().progress
      const today = todayDateString()
      if (current.dailyQuests?.date === today) return
      persistAndSet({ ...current, dailyQuests: { date: today, quests: generateDailyQuests(DAILY_QUEST_TEMPLATES) } })
    },

    resetProgress() {
      persistAndSet(createInitialProgress())
    },
  }
})

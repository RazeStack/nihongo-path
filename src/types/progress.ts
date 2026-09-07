/**
 * Форма всего, что сохраняется между сессиями. Это единственный источник
 * правды о прогрессе пользователя — компоненты его читают, а изменяют
 * только через действия store (см. store/useProgressStore.ts).
 */

/** 0 = совсем новый элемент, выше — лучше запомнен (см. services/srs.ts). */
export interface SrsItemState {
  box: number
  dueDate: string // YYYY-MM-DD
  lastReviewed: string | null
  correctStreak: number
  lapses: number
}

export interface ExamAttempt {
  date: string // ISO
  scorePercent: number
  passed: boolean
  correctCount: number
  totalCount: number
  durationSeconds: number
}

export interface DailyQuestInstance {
  id: string
  templateId: string
  title: string
  targetCount: number
  progressCount: number
  xpReward: number
  completed: boolean
}

export interface StreakState {
  current: number
  longest: number
  lastActiveDate: string | null // YYYY-MM-DD
}

export interface UserProgress {
  xp: number
  completedLessons: string[]
  blockExamAttempts: Record<string, ExamAttempt[]>
  /** Ключ — srsKey вида "kana:h-a", общий для всех типов контента. */
  srs: Record<string, SrsItemState>
  mistakeCounts: Record<string, number>
  correctCounts: Record<string, number>
  totalAnswered: number
  totalCorrect: number
  unlockedAchievements: Record<string, string> // achievementId -> дата
  streak: StreakState
  dailyQuests: { date: string; quests: DailyQuestInstance[] } | null
  createdAt: string
}

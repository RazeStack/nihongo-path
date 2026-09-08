import { todayDateString } from '@/utils/date'
import type { BlockDefinition, LevelDefinition } from '@/types/content'
import type { UserProgress } from '@/types/progress'

export function createInitialProgress(): UserProgress {
  return {
    xp: 0,
    completedLessons: [],
    blockExamAttempts: {},
    srs: {},
    mistakeCounts: {},
    correctCounts: {},
    totalAnswered: 0,
    totalCorrect: 0,
    unlockedAchievements: {},
    streak: { current: 0, longest: 0, lastActiveDate: null },
    dailyQuests: null,
    createdAt: todayDateString(),
  }
}

/** Проверяет, что загруженный JSON-файл действительно похож на резервную копию прогресса. */
export function isValidProgressShape(value: unknown): value is UserProgress {
  if (typeof value !== 'object' || value === null) return false
  const candidate = value as Record<string, unknown>
  return (
    typeof candidate.xp === 'number' &&
    Array.isArray(candidate.completedLessons) &&
    typeof candidate.srs === 'object' &&
    candidate.srs !== null &&
    typeof candidate.blockExamAttempts === 'object' &&
    candidate.blockExamAttempts !== null &&
    typeof candidate.createdAt === 'string'
  )
}

export function hasPassedExam(progress: UserProgress, blockId: string): boolean {
  const attempts = progress.blockExamAttempts[blockId] ?? []
  return attempts.some((attempt) => attempt.passed)
}

export function getBestExamScore(progress: UserProgress, blockId: string): number | null {
  const attempts = progress.blockExamAttempts[blockId] ?? []
  if (attempts.length === 0) return null
  return Math.max(...attempts.map((attempt) => attempt.scorePercent))
}

/** Уровень открыт, если нет предпосылки, либо предыдущий уровень пройден целиком. */
export function isLevelUnlocked(level: LevelDefinition, progress: UserProgress, allLevels: LevelDefinition[]): boolean {
  if (!level.prerequisiteLevelId) return true
  const prerequisiteLevel = allLevels.find((candidate) => candidate.id === level.prerequisiteLevelId)
  if (!prerequisiteLevel) return true
  return isLevelCompleted(prerequisiteLevel, progress)
}

/** Уровень пройден целиком, когда сданы экзамены всех его блоков. */
export function isLevelCompleted(level: LevelDefinition, progress: UserProgress): boolean {
  if (level.blocks.length === 0) return false
  return level.blocks.every((block) => hasPassedExam(progress, block.exam.id))
}

/** Предполагается, что блок-предпосылка находится в том же уровне (level.blocks). */
export function isBlockUnlocked(
  block: BlockDefinition,
  level: LevelDefinition,
  progress: UserProgress,
  levelUnlocked: boolean,
): boolean {
  if (!levelUnlocked) return false
  if (!block.prerequisiteBlockId) return true
  const prerequisiteBlock = level.blocks.find((candidate) => candidate.id === block.prerequisiteBlockId)
  if (!prerequisiteBlock) return true
  return hasPassedExam(progress, prerequisiteBlock.exam.id)
}

export function getLessonsCompletedInBlock(block: BlockDefinition, progress: UserProgress): number {
  return block.lessons.filter((lesson) => progress.completedLessons.includes(lesson.id)).length
}

export function isBlockLessonsComplete(block: BlockDefinition, progress: UserProgress): boolean {
  return getLessonsCompletedInBlock(block, progress) === block.lessons.length
}

export function getBlockProgressPercent(block: BlockDefinition, progress: UserProgress): number {
  if (block.lessons.length === 0) return 0
  return Math.round((getLessonsCompletedInBlock(block, progress) / block.lessons.length) * 100)
}

export type BlockStatus = 'locked' | 'available' | 'completed'

export function getBlockStatus(
  block: BlockDefinition,
  level: LevelDefinition,
  progress: UserProgress,
  levelUnlocked: boolean,
): BlockStatus {
  if (!isBlockUnlocked(block, level, progress, levelUnlocked)) return 'locked'
  if (hasPassedExam(progress, block.exam.id)) return 'completed'
  return 'available'
}

/** Текст-объяснение блокировки — пользователь всегда должен понимать, что нужно сделать. */
export function getBlockLockReason(block: BlockDefinition, level: LevelDefinition, levelUnlocked: boolean): string {
  if (!levelUnlocked) {
    return `Заверши уровень ${level.prerequisiteLevelId?.toUpperCase()}, чтобы открыть уровень ${level.id.toUpperCase()}.`
  }
  const prerequisiteBlock = level.blocks.find((candidate) => candidate.id === block.prerequisiteBlockId)
  return prerequisiteBlock
    ? `Сдай экзамен «${prerequisiteBlock.exam.title}», чтобы открыть этот раздел.`
    : 'Этот раздел пока заблокирован.'
}

/** Находит первый блок первого доступного уровня, который ещё не пройден — то, что предложить пользователю дальше. */
export function findNextRecommendedBlock(
  levels: LevelDefinition[],
  progress: UserProgress,
): { level: LevelDefinition; block: BlockDefinition } | null {
  for (const level of levels) {
    const levelUnlocked = isLevelUnlocked(level, progress, levels)
    if (!levelUnlocked) continue
    for (const block of [...level.blocks].sort((a, b) => a.order - b.order)) {
      const status = getBlockStatus(block, level, progress, levelUnlocked)
      if (status !== 'completed') {
        return { level, block }
      }
    }
  }
  return null
}

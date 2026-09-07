import type { AchievementDefinition } from '@/types/gamification'
import type { UserProgress } from '@/types/progress'

/** Возвращает id достижений, которые условиям уже удовлетворяют, но ещё не отмечены как открытые. */
export function findNewlyUnlockedAchievements(
  definitions: AchievementDefinition[],
  progress: UserProgress,
): AchievementDefinition[] {
  return definitions.filter(
    (achievement) => !progress.unlockedAchievements[achievement.id] && achievement.isUnlocked(progress),
  )
}

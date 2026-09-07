import { calculateProfileLevel } from '@/services/xp'
import { useToastStore } from '@/store/useToastStore'
import type { AchievementDefinition } from '@/types/gamification'

/**
 * Показывает всплывающие уведомления после действия, которое могло принести
 * XP и/или открыть достижения (завершение урока, сдача экзамена и т.д.).
 * xpBefore нужен, чтобы отличить реальное повышение уровня профиля.
 */
export function announceRewards(
  xpBefore: number,
  result: { xpGained: number; newAchievements: AchievementDefinition[] },
) {
  const push = useToastStore.getState().push

  if (result.xpGained > 0) {
    push({ type: 'xp', title: `+${result.xpGained} XP` })
  }

  const levelBefore = calculateProfileLevel(xpBefore)
  const levelAfter = calculateProfileLevel(xpBefore + result.xpGained)
  if (levelAfter.level > levelBefore.level) {
    push({ type: 'levelup', title: `Новый уровень: ${levelAfter.level}`, description: levelAfter.title })
  }

  for (const achievement of result.newAchievements) {
    push({ type: 'achievement', title: achievement.title, description: achievement.description })
  }
}

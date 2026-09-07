import { addDaysToDateString, todayDateString } from '@/utils/date'
import type { StreakState } from '@/types/progress'

/**
 * Обновляет серию дней при любой учебной активности. Пропущенный день не
 * "обнуляет прогресс" целиком — сбрасывается только текущая серия,
 * а лучший результат (longest) сохраняется навсегда.
 */
export function recordActivityForStreak(streak: StreakState): StreakState {
  const today = todayDateString()
  if (streak.lastActiveDate === today) return streak

  const yesterday = addDaysToDateString(today, -1)
  const isConsecutive = streak.lastActiveDate === yesterday
  const current = isConsecutive ? streak.current + 1 : 1

  return {
    current,
    longest: Math.max(streak.longest, current),
    lastActiveDate: today,
  }
}

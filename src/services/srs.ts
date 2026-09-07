import { addDaysToDateString, todayDateString } from '@/utils/date'
import type { SrsItemState } from '@/types/progress'

/**
 * Упрощённая система Лейтнера: 7 "коробок" с растущим интервалом повтора.
 * Правильный ответ — элемент двигается на коробку вперёд и повторится
 * позже. Ошибка — откатывается на 2 коробки назад и возвращается почти
 * сразу. Реализация спрятана за этим модулем, так что алгоритм можно
 * заменить на SM-2 или что-то умнее, не трогая store и компоненты.
 */
const BOX_INTERVAL_DAYS = [0, 1, 3, 7, 14, 30, 60]
const MAX_BOX = BOX_INTERVAL_DAYS.length - 1

export type SrsStatus = 'new' | 'learning' | 'familiar' | 'good' | 'mastered'

export function createNewSrsItem(): SrsItemState {
  return {
    box: 0,
    dueDate: todayDateString(),
    lastReviewed: null,
    correctStreak: 0,
    lapses: 0,
  }
}

export function reviewSrsItem(current: SrsItemState | undefined, wasCorrect: boolean): SrsItemState {
  const state = current ?? createNewSrsItem()
  const today = todayDateString()

  if (wasCorrect) {
    const nextBox = Math.min(state.box + 1, MAX_BOX)
    return {
      box: nextBox,
      dueDate: addDaysToDateString(today, BOX_INTERVAL_DAYS[nextBox]),
      lastReviewed: today,
      correctStreak: state.correctStreak + 1,
      lapses: state.lapses,
    }
  }

  const nextBox = Math.max(state.box - 2, 0)
  return {
    box: nextBox,
    dueDate: today,
    lastReviewed: today,
    correctStreak: 0,
    lapses: state.lapses + 1,
  }
}

export function isDue(state: SrsItemState | undefined): boolean {
  if (!state) return true // ещё не изучался — всегда "к повторению"
  return state.dueDate <= todayDateString()
}

export function getSrsStatus(state: SrsItemState | undefined): SrsStatus {
  if (!state || state.lastReviewed === null) return 'new'
  if (state.box <= 1) return 'learning'
  if (state.box <= 2) return 'familiar'
  if (state.box <= 4) return 'good'
  return 'mastered'
}

export const SRS_STATUS_LABELS: Record<SrsStatus, string> = {
  new: 'Новое',
  learning: 'Изучается',
  familiar: 'Знакомо',
  good: 'Хорошо знает',
  mastered: 'Освоено',
}

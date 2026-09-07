import { isDue } from '@/services/srs'
import { pickRandom, shuffle } from '@/utils/shuffle'
import type { SrsItemState } from '@/types/progress'
import type { PracticeMode, Question } from '@/types/practice'

export interface PracticeSourceItem {
  id: string
  /** Ключ для SRS/статистики, например "kana:h-a". Общий формат для всех типов контента. */
  srsKey: string
}

/**
 * Выбирает элементы для тренировки по выбранному режиму. Не знает, что это
 * за элементы (кана, слово, кандзи) — работает по id/srsKey, поэтому один
 * и тот же движок обслуживает все будущие типы контента.
 */
export function selectItemsForMode<T extends PracticeSourceItem>(
  allItems: T[],
  mode: PracticeMode,
  srsMap: Record<string, SrsItemState>,
  mistakeCounts: Record<string, number>,
  count: number,
): T[] {
  if (mode === 'sequential') {
    return allItems.slice(0, count)
  }

  if (mode === 'exam') {
    return shuffle(allItems).slice(0, count)
  }

  if (mode === 'random') {
    return pickRandom(allItems, count)
  }

  if (mode === 'mistakes') {
    const withMistakes = allItems.filter((item) => (mistakeCounts[item.srsKey] ?? 0) > 0)
    return shuffle(withMistakes)
      .sort((a, b) => (mistakeCounts[b.srsKey] ?? 0) - (mistakeCounts[a.srsKey] ?? 0))
      .slice(0, count)
  }

  // review: сначала элементы, у которых подошёл срок повторения (слабейшие — вперёд),
  // а если их не хватает на полную сессию — дополняем остальными, чтобы не обрывать тренировку.
  const due = shuffle(allItems.filter((item) => isDue(srsMap[item.srsKey])))
  const dueSorted = due.sort((a, b) => (srsMap[a.srsKey]?.box ?? 0) - (srsMap[b.srsKey]?.box ?? 0))
  if (dueSorted.length >= count) return dueSorted.slice(0, count)

  const dueIds = new Set(dueSorted.map((item) => item.id))
  const filler = pickRandom(
    allItems.filter((item) => !dueIds.has(item.id)),
    count - dueSorted.length,
  )
  return [...dueSorted, ...filler]
}

/** Генерирует варианты ответа: правильный + отвлекающие из того же пула, в случайном порядке. */
export function buildMultipleChoiceOptions<T>(
  correctAnswer: string,
  pool: T[],
  getAnswerText: (item: T) => string,
  optionCount = 4,
): string[] {
  const distractors = shuffle(pool.map(getAnswerText).filter((text) => text !== correctAnswer)).slice(
    0,
    optionCount - 1,
  )
  return shuffle([correctAnswer, ...distractors])
}

export function summarizeSession(answered: { isCorrect: boolean }[], durationSeconds: number) {
  const correctCount = answered.filter((entry) => entry.isCorrect).length
  const totalCount = answered.length
  return {
    correctCount,
    totalCount,
    scorePercent: totalCount === 0 ? 0 : Math.round((correctCount / totalCount) * 100),
    durationSeconds,
  }
}

export type { Question }

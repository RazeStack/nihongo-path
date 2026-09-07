import { findKanaCharById } from '@/data/kana/allKanaCharacters'
import { findGrammarPointById } from '@/data/grammar/allGrammarPoints'
import { findVocabWordById } from '@/data/vocabulary/allVocabWords'
import { findKanjiEntryById } from '@/data/kanji/allKanjiEntries'
import { kanaSrsKey } from '@/services/questionGenerators/kanaQuestions'
import { flattenDrillItems, type GrammarDrillItem } from '@/services/questionGenerators/grammarQuestions'
import { vocabSrsKey } from '@/services/questionGenerators/vocabQuestions'
import { kanjiSrsKey } from '@/services/questionGenerators/kanjiQuestions'
import type { BlockDefinition, KanaChar, KanjiEntry, VocabWord } from '@/types/content'
import type { UserProgress } from '@/types/progress'

/** KanaChar с добавленным srsKey — так его можно напрямую скормить универсальному usePracticeSession. */
export type PracticeKanaChar = KanaChar & { srsKey: string }

/** id элементов (кана/грамматика/...), которые вводят уроки блока, уже пройденные пользователем. */
function getKnownItemIds(blocks: BlockDefinition[], progress: UserProgress): string[] {
  const itemIds = new Set<string>()
  for (const block of blocks) {
    for (const lesson of block.lessons) {
      if (!progress.completedLessons.includes(lesson.id)) continue
      lesson.itemIds.forEach((id) => itemIds.add(id))
    }
  }
  return [...itemIds]
}

/**
 * Символы, которые пользователь уже "встретил" — т.е. прошёл урок, вводящий
 * их. Тренировки и экзамены строятся только из уже введённого материала,
 * а не из всей таблицы разом.
 */
export function getKnownKanaCharacters(blocks: BlockDefinition[], progress: UserProgress): PracticeKanaChar[] {
  return getKnownItemIds(blocks, progress)
    .map(findKanaCharById)
    .filter((char): char is KanaChar => char !== undefined)
    .map((char) => ({ ...char, srsKey: kanaSrsKey(char) }))
}

/** То же самое, но для грамматических конструкций — каждая даёт несколько тренировочных вопросов (по числу drillSentences). */
export function getKnownGrammarDrillItems(blocks: BlockDefinition[], progress: UserProgress): GrammarDrillItem[] {
  const knownPoints = getKnownItemIds(blocks, progress)
    .map(findGrammarPointById)
    .filter((point): point is NonNullable<typeof point> => point !== undefined)
  return flattenDrillItems(knownPoints)
}

export type PracticeVocabWord = VocabWord & { srsKey: string }

/** То же самое, но для слов из блока словаря. */
export function getKnownVocabWords(blocks: BlockDefinition[], progress: UserProgress): PracticeVocabWord[] {
  return getKnownItemIds(blocks, progress)
    .map(findVocabWordById)
    .filter((word): word is VocabWord => word !== undefined)
    .map((word) => ({ ...word, srsKey: vocabSrsKey(word) }))
}

export type PracticeKanjiEntry = KanjiEntry & { srsKey: string }

/** То же самое, но для кандзи. */
export function getKnownKanjiEntries(blocks: BlockDefinition[], progress: UserProgress): PracticeKanjiEntry[] {
  return getKnownItemIds(blocks, progress)
    .map(findKanjiEntryById)
    .filter((entry): entry is KanjiEntry => entry !== undefined)
    .map((entry) => ({ ...entry, srsKey: kanjiSrsKey(entry) }))
}

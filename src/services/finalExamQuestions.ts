import { generateKanaQuestion } from '@/services/questionGenerators/kanaQuestions'
import { generateVocabQuestion } from '@/services/questionGenerators/vocabQuestions'
import { generateKanjiQuestion } from '@/services/questionGenerators/kanjiQuestions'
import { generateGrammarQuestion } from '@/services/questionGenerators/grammarQuestions'
import {
  getKnownGrammarDrillItems,
  getKnownKanaCharacters,
  getKnownKanjiEntries,
  getKnownReadingQuestions,
  getKnownVocabWords,
  type ReadingQuestionItem,
} from '@/services/knownItems'
import type { BlockDefinition } from '@/types/content'
import type { UserProgress } from '@/types/progress'

/**
 * Финальный экзамен уровня смешивает вопросы из всех типов контента сразу.
 * Каждый тип уже умеет генерировать Question из своих данных — здесь это
 * просто объединяется в один пул в общем формате {id, srsKey, question},
 * который usePracticeSession может использовать напрямую (как и Reading).
 */
export function getFinalExamQuestionPool(allN5Blocks: BlockDefinition[], progress: UserProgress): ReadingQuestionItem[] {
  const kanaBlocks = allN5Blocks.filter((b) => b.contentType === 'kana')
  const vocabBlocks = allN5Blocks.filter((b) => b.contentType === 'vocabulary')
  const kanjiBlocks = allN5Blocks.filter((b) => b.contentType === 'kanji')
  const grammarBlocks = allN5Blocks.filter((b) => b.contentType === 'grammar')
  const readingBlocks = allN5Blocks.filter((b) => b.contentType === 'reading')

  const kanaChars = getKnownKanaCharacters(kanaBlocks, progress)
  const vocabWords = getKnownVocabWords(vocabBlocks, progress)
  const kanjiEntries = getKnownKanjiEntries(kanjiBlocks, progress)
  const grammarItems = getKnownGrammarDrillItems(grammarBlocks, progress)
  const readingItems = getKnownReadingQuestions(readingBlocks, progress)

  const pool: ReadingQuestionItem[] = []

  kanaChars.forEach((char) => {
    const question = generateKanaQuestion(char, kanaChars, Math.random() > 0.5 ? 'char-to-romaji' : 'romaji-to-char')
    pool.push({ id: question.id, srsKey: char.srsKey, question })
  })
  vocabWords.forEach((word) => {
    const question = generateVocabQuestion(word, vocabWords, Math.random() > 0.5 ? 'word-to-translation' : 'translation-to-word')
    pool.push({ id: question.id, srsKey: word.srsKey, question })
  })
  kanjiEntries.forEach((entry) => {
    const question = generateKanjiQuestion(entry, kanjiEntries, Math.random() > 0.5 ? 'char-to-meaning' : 'meaning-to-char')
    pool.push({ id: question.id, srsKey: entry.srsKey, question })
  })
  grammarItems.forEach((item) => {
    const question = generateGrammarQuestion(item, grammarItems)
    pool.push({ id: question.id, srsKey: item.srsKey, question })
  })
  readingItems.forEach((item) => pool.push(item))

  return pool
}

const SRS_PREFIX_LABELS: Record<string, string> = {
  kana: 'Кана',
  vocab: 'Словарь',
  kanji: 'Кандзи',
  grammar: 'Грамматика',
  reading: 'Чтение',
}

export function labelForSrsKey(srsKey: string): string | undefined {
  return SRS_PREFIX_LABELS[srsKey.split(':')[0]]
}

import { findKanaCharById } from '@/data/kana/allKanaCharacters'
import { findVocabWordById } from '@/data/vocabulary/allVocabWords'
import { generateKanaQuestion, type KanaQuestionDirection } from './kanaQuestions'
import { generateVocabQuestion, type VocabQuestionDirection } from './vocabQuestions'
import { generateKanjiQuestion, type KanjiQuestionDirection } from './kanjiQuestions'
import type { PracticeKanaChar, PracticeKanjiEntry, PracticeVocabWord } from '@/services/knownItems'
import type { PracticeSourceItem } from '@/services/practiceEngine'
import type { Question } from '@/types/practice'

/** По id (после "тип:") находит подпись темы для группировки слабых мест на экзамене. */
function idFromSrsKey(srsKey: string): string {
  return srsKey.split(':')[1]
}

/**
 * Общий интерфейс для типов контента, у которых вопрос задаётся направлением
 * (символ→чтение / чтение→символ и т.п.). Позволяет практике и экзамену
 * работать с каной/словарём/кандзи одним и тем же кодом — новый такой тип
 * контента добавляется одним новым адаптером, без правок страниц.
 */
export interface DirectionalAdapter<T extends PracticeSourceItem> {
  directionOptions: { value: string; label: string }[]
  generateQuestion: (item: T, pool: T[], direction: string) => Question
  /** Подпись темы (для группировки слабых мест на результатах экзамена) по srsKey отвеченного вопроса. */
  getGroupLabel: (srsKey: string) => string | undefined
}

export const KANA_ADAPTER: DirectionalAdapter<PracticeKanaChar> = {
  directionOptions: [
    { value: 'char-to-romaji', label: 'Символ → ромадзи' },
    { value: 'romaji-to-char', label: 'Ромадзи → символ' },
  ],
  generateQuestion: (item, pool, direction) => generateKanaQuestion(item, pool, direction as KanaQuestionDirection),
  getGroupLabel: (srsKey) => findKanaCharById(idFromSrsKey(srsKey))?.row,
}

export const VOCAB_ADAPTER: DirectionalAdapter<PracticeVocabWord> = {
  directionOptions: [
    { value: 'word-to-translation', label: 'Слово → перевод' },
    { value: 'translation-to-word', label: 'Перевод → слово' },
  ],
  generateQuestion: (item, pool, direction) => generateVocabQuestion(item, pool, direction as VocabQuestionDirection),
  getGroupLabel: (srsKey) => findVocabWordById(idFromSrsKey(srsKey))?.category,
}

export const KANJI_ADAPTER: DirectionalAdapter<PracticeKanjiEntry> = {
  directionOptions: [
    { value: 'char-to-meaning', label: 'Кандзи → значение' },
    { value: 'meaning-to-char', label: 'Значение → кандзи' },
  ],
  generateQuestion: (item, pool, direction) => generateKanjiQuestion(item, pool, direction as KanjiQuestionDirection),
  getGroupLabel: () => 'Кандзи',
}

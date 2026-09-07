import { N5_VOCABULARY_WORDS } from './n5Vocabulary.words'
import { N5_NUMBERS_TIME_WORDS } from '@/data/numbers/n5NumbersTime.words'
import type { VocabWord } from '@/types/content'

export const ALL_VOCAB_WORDS: VocabWord[] = [...N5_VOCABULARY_WORDS, ...N5_NUMBERS_TIME_WORDS]

const BY_ID = new Map(ALL_VOCAB_WORDS.map((word) => [word.id, word]))

export function findVocabWordById(id: string): VocabWord | undefined {
  return BY_ID.get(id)
}

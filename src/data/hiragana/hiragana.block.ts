import { HIRAGANA_LESSONS } from './hiragana.lessons'
import type { BlockDefinition } from '@/types/content'

export const HIRAGANA_BLOCK: BlockDefinition = {
  id: 'n5-hiragana',
  levelId: 'n5',
  title: 'Хирагана',
  description: 'Базовая слоговая азбука для японских слов, частиц и окончаний глаголов: годзюон, дакутэн, хандакутэн, ёон и правила чтения.',
  order: 1,
  contentType: 'kana',
  lessons: HIRAGANA_LESSONS,
  exam: {
    id: 'n5-hiragana-exam',
    blockId: 'n5-hiragana',
    title: 'Экзамен: Хирагана',
    description: 'Проверка знания всех 104 знаков хираганы (годзюон, дакутэн, хандакутэн, ёон) в обе стороны — символ→ромадзи и ромадзи→символ.',
    questionCount: 35,
    passingScore: 0.8,
    xpReward: 250,
  },
}

export * from './hiragana.characters'

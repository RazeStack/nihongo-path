import { KATAKANA_LESSONS } from './katakana.lessons'
import type { BlockDefinition } from '@/types/content'

export const KATAKANA_BLOCK: BlockDefinition = {
  id: 'n5-katakana',
  levelId: 'n5',
  title: 'Катакана',
  description: 'Азбука для заимствованных слов, иностранных имён и терминов.',
  order: 2,
  contentType: 'kana',
  prerequisiteBlockId: 'n5-hiragana',
  lessons: KATAKANA_LESSONS,
  exam: {
    id: 'n5-katakana-exam',
    blockId: 'n5-katakana',
    title: 'Экзамен: Катакана',
    description: 'Проверка знания всех 46 базовых знаков катаканы в обе стороны — символ→ромадзи и ромадзи→символ.',
    questionCount: 20,
    passingScore: 0.8,
    xpReward: 200,
  },
}

export * from './katakana.characters'

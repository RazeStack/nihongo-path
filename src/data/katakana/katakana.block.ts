import { KATAKANA_LESSONS } from './katakana.lessons'
import type { BlockDefinition } from '@/types/content'

export const KATAKANA_BLOCK: BlockDefinition = {
  id: 'n5-katakana',
  levelId: 'n5',
  title: 'Катакана',
  description: 'Азбука для заимствованных слов, иностранных имён и терминов: годзюон, дакутэн, хандакутэн, ёон и расширенная катакана.',
  order: 2,
  contentType: 'kana',
  prerequisiteBlockId: 'n5-hiragana',
  lessons: KATAKANA_LESSONS,
  exam: {
    id: 'n5-katakana-exam',
    blockId: 'n5-katakana',
    title: 'Экзамен: Катакана',
    description: 'Проверка знания всех знаков катаканы (годзюон, дакутэн, хандакутэн, ёон, расширенная катакана) в обе стороны — символ→ромадзи и ромадзи→символ.',
    questionCount: 40,
    passingScore: 0.8,
    xpReward: 250,
  },
}

export * from './katakana.characters'

import { N5_KANJI_LESSONS } from './n5Kanji.lessons'
import type { BlockDefinition } from '@/types/content'

export const N5_KANJI_BLOCK: BlockDefinition = {
  id: 'n5-kanji',
  levelId: 'n5',
  title: 'Кандзи N5',
  description: '131 иероглиф N5: числа, время, тело, направления, цвета, природа, город, глаголы действия, работа и техника — каждый связан с реальными словами.',
  order: 6,
  contentType: 'kanji',
  prerequisiteBlockId: 'n5-vocabulary',
  lessons: N5_KANJI_LESSONS,
  exam: {
    id: 'n5-kanji-exam',
    blockId: 'n5-kanji',
    title: 'Экзамен: Кандзи N5',
    description: 'Проверка значений всех кандзи в обе стороны — кандзи→значение и значение→кандзи.',
    questionCount: 40,
    passingScore: 0.8,
    xpReward: 300,
  },
}

export * from './n5Kanji.entries'

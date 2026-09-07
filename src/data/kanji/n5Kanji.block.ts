import { N5_KANJI_LESSONS } from './n5Kanji.lessons'
import type { BlockDefinition } from '@/types/content'

export const N5_KANJI_BLOCK: BlockDefinition = {
  id: 'n5-kanji',
  levelId: 'n5',
  title: 'Кандзи N5',
  description: '24 базовых иероглифа: дни недели, природа, величина, школа — каждый связан с реальными словами.',
  order: 5,
  contentType: 'kanji',
  prerequisiteBlockId: 'n5-vocabulary',
  lessons: N5_KANJI_LESSONS,
  exam: {
    id: 'n5-kanji-exam',
    blockId: 'n5-kanji',
    title: 'Экзамен: Кандзи N5',
    description: 'Проверка значений всех 24 кандзи в обе стороны — кандзи→значение и значение→кандзи.',
    questionCount: 20,
    passingScore: 0.8,
    xpReward: 240,
  },
}

export * from './n5Kanji.entries'

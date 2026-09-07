import { N2_KANJI_LESSONS } from './n2Kanji.lessons'
import type { BlockDefinition } from '@/types/content'

export const N2_KANJI_BLOCK: BlockDefinition = {
  id: 'n2-kanji',
  levelId: 'n2',
  title: 'Кандзи N2',
  description: '20 иероглифов N2: дело, медиа, наука и абстрактные понятия — из уже знакомых слов.',
  order: 3,
  contentType: 'kanji',
  prerequisiteBlockId: 'n2-vocabulary',
  lessons: N2_KANJI_LESSONS,
  exam: {
    id: 'n2-kanji-exam',
    blockId: 'n2-kanji',
    title: 'Экзамен: Кандзи N2',
    description: 'Проверка значений всех 20 кандзи N2 в обе стороны.',
    questionCount: 18,
    passingScore: 0.75,
    xpReward: 300,
  },
}

export * from './n2Kanji.entries'

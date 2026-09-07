import { N3_KANJI_LESSONS } from './n3Kanji.lessons'
import type { BlockDefinition } from '@/types/content'

export const N3_KANJI_BLOCK: BlockDefinition = {
  id: 'n3-kanji',
  levelId: 'n3',
  title: 'Кандзи N3',
  description: '21 иероглиф N3: общество, технологии, экономика и отношения — из уже знакомых слов.',
  order: 3,
  contentType: 'kanji',
  prerequisiteBlockId: 'n3-vocabulary',
  lessons: N3_KANJI_LESSONS,
  exam: {
    id: 'n3-kanji-exam',
    blockId: 'n3-kanji',
    title: 'Экзамен: Кандзи N3',
    description: 'Проверка значений всех 21 кандзи N3 в обе стороны.',
    questionCount: 18,
    passingScore: 0.75,
    xpReward: 280,
  },
}

export * from './n3Kanji.entries'

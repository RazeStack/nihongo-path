import { N3_KANJI_LESSONS } from './n3Kanji.lessons'
import type { BlockDefinition } from '@/types/content'

export const N3_KANJI_BLOCK: BlockDefinition = {
  id: 'n3-kanji',
  levelId: 'n3',
  title: 'Кандзи N3',
  description: '77 иероглифов N3: общество, технологии, экономика, отношения, формальная лексика, наука, психология, работа и экология — из уже знакомых слов.',
  order: 8,
  contentType: 'kanji',
  prerequisiteBlockId: 'n3-vocabulary',
  lessons: N3_KANJI_LESSONS,
  exam: {
    id: 'n3-kanji-exam',
    blockId: 'n3-kanji',
    title: 'Экзамен: Кандзи N3',
    description: 'Проверка значений всех 77 кандзи N3 в обе стороны.',
    questionCount: 30,
    passingScore: 0.8,
    xpReward: 300,
  },
}

export * from './n3Kanji.entries'

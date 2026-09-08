import { N2_KANJI_LESSONS } from './n2Kanji.lessons'
import type { BlockDefinition } from '@/types/content'

export const N2_KANJI_BLOCK: BlockDefinition = {
  id: 'n2-kanji',
  levelId: 'n2',
  title: 'Кандзи N2',
  description: '343 иероглифа N2 по 37 темам: дело, медиа, наука, бизнес, работа, психология, здоровье, право, общество, эмоции, творчество и другие — из уже знакомых слов.',
  order: 7,
  contentType: 'kanji',
  prerequisiteBlockId: 'n2-vocabulary',
  lessons: N2_KANJI_LESSONS,
  exam: {
    id: 'n2-kanji-exam',
    blockId: 'n2-kanji',
    title: 'Экзамен: Кандзи N2',
    description: 'Проверка значений кандзи N2 из всех тем в обе стороны.',
    questionCount: 30,
    passingScore: 0.75,
    xpReward: 450,
  },
}

export * from './n2Kanji.entries'

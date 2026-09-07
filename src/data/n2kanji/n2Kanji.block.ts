import { N2_KANJI_LESSONS } from './n2Kanji.lessons'
import type { BlockDefinition } from '@/types/content'

export const N2_KANJI_BLOCK: BlockDefinition = {
  id: 'n2-kanji',
  levelId: 'n2',
  title: 'Кандзи N2',
  description: '68 иероглифов N2 по 9 темам: дело, медиа, наука, понятия, бизнес, работа, психология, здоровье и абстракция — из уже знакомых слов.',
  order: 7,
  contentType: 'kanji',
  prerequisiteBlockId: 'n2-vocabulary',
  lessons: N2_KANJI_LESSONS,
  exam: {
    id: 'n2-kanji-exam',
    blockId: 'n2-kanji',
    title: 'Экзамен: Кандзи N2',
    description: 'Проверка значений всех 68 кандзи N2 в обе стороны.',
    questionCount: 22,
    passingScore: 0.75,
    xpReward: 340,
  },
}

export * from './n2Kanji.entries'

import { N4_KANJI_LESSONS } from './n4Kanji.lessons'
import type { BlockDefinition } from '@/types/content'

export const N4_KANJI_BLOCK: BlockDefinition = {
  id: 'n4-kanji',
  levelId: 'n4',
  title: 'Кандзи N4',
  description: '176 иероглифов N4 по 21 теме: работа, правила, общество, технологии, характер, здоровье, мышление, природные явления, путешествия, дом, покупки, эмоции и достижение целей — почти все уже знакомы как слова.',
  order: 6,
  contentType: 'kanji',
  prerequisiteBlockId: 'n4-vocabulary',
  lessons: N4_KANJI_LESSONS,
  exam: {
    id: 'n4-kanji-exam',
    blockId: 'n4-kanji',
    title: 'Экзамен: Кандзи N4',
    description: 'Проверка значений всех 176 кандзи N4 в обе стороны.',
    questionCount: 30,
    passingScore: 0.8,
    xpReward: 320,
  },
}

export * from './n4Kanji.entries'

import { N3_GRAMMAR_LESSONS } from './n3Grammar.lessons'
import type { BlockDefinition } from '@/types/content'

export const N3_GRAMMAR_BLOCK: BlockDefinition = {
  id: 'n3-grammar',
  levelId: 'n3',
  title: 'Грамматика N3: решения и выводы',
  description: 'ことになる, ことにする, わけです, わけではない, わけがない, ために, ように, たばかり.',
  order: 1,
  contentType: 'grammar',
  lessons: N3_GRAMMAR_LESSONS,
  exam: {
    id: 'n3-grammar-exam',
    blockId: 'n3-grammar',
    title: 'Экзамен: Грамматика N3',
    description: 'Проверка ことになる, ことにする, わけです, わけではない, わけがない, ために, ように и たばかり.',
    questionCount: 14,
    passingScore: 0.8,
    xpReward: 260,
  },
}

export * from './n3Grammar.points'

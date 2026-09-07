import { N3_GRAMMAR_FORMAL_LESSONS } from './n3GrammarFormal.lessons'
import type { BlockDefinition } from '@/types/content'

export const N3_GRAMMAR_FORMAL_BLOCK: BlockDefinition = {
  id: 'n3-grammar-formal',
  levelId: 'n3',
  title: 'Формальные связки',
  description: 'に対して, に関して, によって, にとって, として, 上で, 際に, につれて — переход от разговорных частиц к письменному стилю.',
  order: 2,
  contentType: 'grammar',
  prerequisiteBlockId: 'n3-grammar',
  lessons: N3_GRAMMAR_FORMAL_LESSONS,
  exam: {
    id: 'n3-grammar-formal-exam',
    blockId: 'n3-grammar-formal',
    title: 'Экзамен: Формальные связки',
    description: 'Проверка に対して, に関して, によって, にとって, として, 上で, 際に и につれて.',
    questionCount: 16,
    passingScore: 0.8,
    xpReward: 260,
  },
}

export * from './n3GrammarFormal.points'

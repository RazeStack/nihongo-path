import { N2_GRAMMAR_SCOPE_LESSONS } from './n2GrammarScope.lessons'
import type { BlockDefinition } from '@/types/content'

export const N2_GRAMMAR_SCOPE_BLOCK: BlockDefinition = {
  id: 'n2-grammar-scope',
  levelId: 'n2',
  title: 'Дополнение и охват',
  description: '上に, に加えて, のみならず, を通じて, にわたって, はもとより, ことなく.',
  order: 2,
  contentType: 'grammar',
  prerequisiteBlockId: 'n2-grammar',
  lessons: N2_GRAMMAR_SCOPE_LESSONS,
  exam: {
    id: 'n2-grammar-scope-exam',
    blockId: 'n2-grammar-scope',
    title: 'Экзамен: Дополнение и охват',
    description: 'Проверка 上に, に加えて, のみならず, を通じて, にわたって, はもとより и ことなく.',
    questionCount: 14,
    passingScore: 0.8,
    xpReward: 260,
  },
}

export * from './n2GrammarScope.points'

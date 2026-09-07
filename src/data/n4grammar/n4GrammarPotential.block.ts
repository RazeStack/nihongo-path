import { N4_GRAMMAR_POTENTIAL_LESSONS } from './n4GrammarPotential.lessons'
import type { BlockDefinition } from '@/types/content'

export const N4_GRAMMAR_POTENTIAL_BLOCK: BlockDefinition = {
  id: 'n4-grammar-potential',
  levelId: 'n4',
  title: 'Возможность, пассив и передача действий',
  description: 'Потенциальная форма (могу), てあげる/てもらう/てくれる (кто кому помогает), пассивная и побудительная формы глагола.',
  order: 2,
  contentType: 'grammar',
  prerequisiteBlockId: 'n4-grammar',
  lessons: N4_GRAMMAR_POTENTIAL_LESSONS,
  exam: {
    id: 'n4-grammar-potential-exam',
    blockId: 'n4-grammar-potential',
    title: 'Экзамен: Возможность, пассив и передача действий',
    description: 'Проверка потенциальной формы, てあげる/てもらう/てくれる, пассива и побудительной формы.',
    questionCount: 14,
    passingScore: 0.8,
    xpReward: 260,
  },
}

export * from './n4GrammarPotential.points'

import { N2_GRAMMAR_CAUSATION_LESSONS } from './n2GrammarCausation.lessons'
import type { BlockDefinition } from '@/types/content'

export const N2_GRAMMAR_CAUSATION_BLOCK: BlockDefinition = {
  id: 'n2-grammar-causation',
  levelId: 'n2',
  title: 'Причина, итог и обязательство',
  description: 'に基づいて, あげく, 末に, ばかりに, からには, 次第だ, おそれがある.',
  order: 3,
  contentType: 'grammar',
  prerequisiteBlockId: 'n2-grammar-scope',
  lessons: N2_GRAMMAR_CAUSATION_LESSONS,
  exam: {
    id: 'n2-grammar-causation-exam',
    blockId: 'n2-grammar-causation',
    title: 'Экзамен: Причина, итог и обязательство',
    description: 'Проверка に基づいて, あげく, 末に, ばかりに, からには, 次第だ и おそれがある.',
    questionCount: 14,
    passingScore: 0.8,
    xpReward: 260,
  },
}

export * from './n2GrammarCausation.points'

import { N4_GRAMMAR_LESSONS } from './n4Grammar.lessons'
import type { BlockDefinition } from '@/types/content'

export const N4_GRAMMAR_BLOCK: BlockDefinition = {
  id: 'n4-grammar',
  levelId: 'n4',
  title: 'Грамматика N4: て-форма и производные',
  description: 'て-форма как основа для ています, てもいいです, てはいけません, てください, а также たら, なら, ながら и そう.',
  order: 1,
  contentType: 'grammar',
  lessons: N4_GRAMMAR_LESSONS,
  exam: {
    id: 'n4-grammar-exam',
    blockId: 'n4-grammar',
    title: 'Экзамен: Грамматика N4',
    description: 'Проверка て-форм и восьми конструкций, построенных на её основе.',
    questionCount: 16,
    passingScore: 0.8,
    xpReward: 260,
  },
}

export * from './n4Grammar.points'

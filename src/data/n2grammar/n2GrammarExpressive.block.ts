import { N2_GRAMMAR_EXPRESSIVE_LESSONS } from './n2GrammarExpressive.lessons'
import type { BlockDefinition } from '@/types/content'

export const N2_GRAMMAR_EXPRESSIVE_BLOCK: BlockDefinition = {
  id: 'n2-grammar-expressive',
  levelId: 'n2',
  title: 'Экспрессивные и книжные формы',
  description: 'てまで, ぬきには〜ない, というものだ, つつある.',
  order: 5,
  contentType: 'grammar',
  prerequisiteBlockId: 'n2-grammar-perspective',
  lessons: N2_GRAMMAR_EXPRESSIVE_LESSONS,
  exam: {
    id: 'n2-grammar-expressive-exam',
    blockId: 'n2-grammar-expressive',
    title: 'Экзамен: Экспрессивные и книжные формы',
    description: 'Проверка てまで, ぬきには〜ない, というものだ и つつある.',
    questionCount: 10,
    passingScore: 0.8,
    xpReward: 220,
  },
}

export * from './n2GrammarExpressive.points'

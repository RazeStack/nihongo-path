import { N4_GRAMMAR_SPECULATION_LESSONS } from './n4GrammarSpeculation.lessons'
import type { BlockDefinition } from '@/types/content'

export const N4_GRAMMAR_SPECULATION_BLOCK: BlockDefinition = {
  id: 'n4-grammar-speculation',
  levelId: 'n4',
  title: 'Предположения и намерения',
  description: 'でしょう, かもしれない, はず, つもり, という, そう (по виду) и みたい — как говорить о том, в чём не уверен на 100%.',
  order: 3,
  contentType: 'grammar',
  prerequisiteBlockId: 'n4-grammar-potential',
  lessons: N4_GRAMMAR_SPECULATION_LESSONS,
  exam: {
    id: 'n4-grammar-speculation-exam',
    blockId: 'n4-grammar-speculation',
    title: 'Экзамен: Предположения и намерения',
    description: 'Проверка でしょう, かもしれない, はず, つもり, という, そう и みたい.',
    questionCount: 12,
    passingScore: 0.8,
    xpReward: 240,
  },
}

export * from './n4GrammarSpeculation.points'

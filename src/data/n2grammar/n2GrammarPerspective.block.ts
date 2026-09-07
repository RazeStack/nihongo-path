import { N2_GRAMMAR_PERSPECTIVE_LESSONS } from './n2GrammarPerspective.lessons'
import type { BlockDefinition } from '@/types/content'

export const N2_GRAMMAR_PERSPECTIVE_BLOCK: BlockDefinition = {
  id: 'n2-grammar-perspective',
  levelId: 'n2',
  title: 'Сравнение и точка зрения',
  description: 'どころか, ものの, にしたら, かのようだ, をめぐって, 上は.',
  order: 4,
  contentType: 'grammar',
  prerequisiteBlockId: 'n2-grammar-causation',
  lessons: N2_GRAMMAR_PERSPECTIVE_LESSONS,
  exam: {
    id: 'n2-grammar-perspective-exam',
    blockId: 'n2-grammar-perspective',
    title: 'Экзамен: Сравнение и точка зрения',
    description: 'Проверка どころか, ものの, にしたら, かのようだ, をめぐって и 上は.',
    questionCount: 12,
    passingScore: 0.8,
    xpReward: 240,
  },
}

export * from './n2GrammarPerspective.points'

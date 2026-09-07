import { N4_GRAMMAR_LESSONS } from './n4Grammar.lessons'
import type { BlockDefinition } from '@/types/content'

export const N4_GRAMMAR_BLOCK: BlockDefinition = {
  id: 'n4-grammar',
  levelId: 'n4',
  title: 'Грамматика N4: условия и связки',
  description: 'たら и なら — условие «если/когда»; ながら — два действия одновременно; そうです — пересказ услышанного; たことがある — опыт; ほど〜ない — сравнение. Опираются на て/た-форму, изученную в N5.',
  order: 1,
  contentType: 'grammar',
  lessons: N4_GRAMMAR_LESSONS,
  exam: {
    id: 'n4-grammar-exam',
    blockId: 'n4-grammar',
    title: 'Экзамен: Грамматика N4',
    description: 'Проверка たら, なら, ながら, そうです, たことがある и ほど〜ない.',
    questionCount: 14,
    passingScore: 0.8,
    xpReward: 240,
  },
}

export * from './n4Grammar.points'

import { N5_GRAMMAR_BASICS_LESSONS } from './n5GrammarBasics.lessons'
import type { BlockDefinition } from '@/types/content'

export const N5_GRAMMAR_BASICS_BLOCK: BlockDefinition = {
  id: 'n5-grammar-basics',
  levelId: 'n5',
  title: 'Основы грамматики',
  description: 'Семь частиц и конструкций, на которых держится почти любое простое предложение: です, は, が, を, に, で, ます.',
  order: 3,
  contentType: 'grammar',
  prerequisiteBlockId: 'n5-katakana',
  lessons: N5_GRAMMAR_BASICS_LESSONS,
  exam: {
    id: 'n5-grammar-basics-exam',
    blockId: 'n5-grammar-basics',
    title: 'Экзамен: Основы грамматики',
    description: 'Проверка употребления です, は, が, を, に, で и ます в предложениях.',
    questionCount: 14,
    passingScore: 0.8,
    xpReward: 220,
  },
}

export * from './n5GrammarBasics.points'

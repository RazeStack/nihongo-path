import { N4_GRAMMAR_ADDITIONAL_LESSONS } from './n4GrammarAdditional.lessons'
import type { BlockDefinition } from '@/types/content'

export const N4_GRAMMAR_ADDITIONAL_BLOCK: BlockDefinition = {
  id: 'n4-grammar-additional',
  levelId: 'n4',
  title: 'Причины, уступки и оттенки действия',
  description: 'ので, のに, し, たり〜たりする, まま, すぎる, やすい/にくい, てみる, ておく, てしまう, ようになる, ようにする.',
  order: 4,
  contentType: 'grammar',
  prerequisiteBlockId: 'n4-grammar-speculation',
  lessons: N4_GRAMMAR_ADDITIONAL_LESSONS,
  exam: {
    id: 'n4-grammar-additional-exam',
    blockId: 'n4-grammar-additional',
    title: 'Экзамен: Причины, уступки и оттенки действия',
    description: 'Проверка ので, のに, し, たり〜たりする, まま, すぎる, やすい/にくい, てみる, ておく, てしまう, ようになる и ようにする.',
    questionCount: 18,
    passingScore: 0.8,
    xpReward: 260,
  },
}

export * from './n4GrammarAdditional.points'

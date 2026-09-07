import { N5_ADJECTIVES_LESSONS } from './n5Adjectives.lessons'
import type { BlockDefinition } from '@/types/content'

export const N5_ADJECTIVES_BLOCK: BlockDefinition = {
  id: 'n5-adjectives',
  levelId: 'n5',
  title: 'Прилагательные',
  description: '5 い-прилагательных и 5 な-прилагательных: как устроено настоящее/прошедшее время и отрицание.',
  order: 7,
  contentType: 'grammar',
  prerequisiteBlockId: 'n5-verbs',
  lessons: N5_ADJECTIVES_LESSONS,
  exam: {
    id: 'n5-adjectives-exam',
    blockId: 'n5-adjectives',
    title: 'Экзамен: Прилагательные',
    description: 'Проверка отрицательной формы 10 базовых い- и な-прилагательных.',
    questionCount: 10,
    passingScore: 0.8,
    xpReward: 220,
  },
}

export * from './n5Adjectives.points'

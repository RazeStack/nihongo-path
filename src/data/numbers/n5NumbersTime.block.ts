import { N5_NUMBERS_TIME_LESSONS } from './n5NumbersTime.lessons'
import type { BlockDefinition } from '@/types/content'

export const N5_NUMBERS_TIME_BLOCK: BlockDefinition = {
  id: 'n5-numbers-time',
  levelId: 'n5',
  title: 'Числа и время',
  description: 'Числа 1-10, сотни и тысячи на примере денег, а также как называть часы и минуты.',
  order: 8,
  contentType: 'vocabulary',
  prerequisiteBlockId: 'n5-adjectives',
  lessons: N5_NUMBERS_TIME_LESSONS,
  exam: {
    id: 'n5-numbers-time-exam',
    blockId: 'n5-numbers-time',
    title: 'Экзамен: Числа и время',
    description: 'Проверка чисел 1-10, сотен/тысяч и особых чтений часов и минут.',
    questionCount: 20,
    passingScore: 0.8,
    xpReward: 220,
  },
}

export * from './n5NumbersTime.words'

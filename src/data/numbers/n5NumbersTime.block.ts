import { N5_NUMBERS_TIME_LESSONS } from './n5NumbersTime.lessons'
import type { BlockDefinition } from '@/types/content'

export const N5_NUMBERS_TIME_BLOCK: BlockDefinition = {
  id: 'n5-numbers-time',
  levelId: 'n5',
  title: 'Числа и время',
  description: 'Числа 1-99, сотни и тысячи, часы и минуты, дни недели, даты месяца и базовые счётчики (人, 枚, 本).',
  order: 10,
  contentType: 'vocabulary',
  prerequisiteBlockId: 'n5-grammar-extended',
  lessons: N5_NUMBERS_TIME_LESSONS,
  exam: {
    id: 'n5-numbers-time-exam',
    blockId: 'n5-numbers-time',
    title: 'Экзамен: Числа и время',
    description: 'Проверка чисел 1-99, часов/минут, дней недели, дат месяца и счётчиков.',
    questionCount: 26,
    passingScore: 0.8,
    xpReward: 240,
  },
}

export * from './n5NumbersTime.words'

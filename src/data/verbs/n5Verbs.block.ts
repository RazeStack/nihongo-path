import { N5_VERBS_LESSONS } from './n5Verbs.lessons'
import type { BlockDefinition } from '@/types/content'

export const N5_VERBS_BLOCK: BlockDefinition = {
  id: 'n5-verbs',
  levelId: 'n5',
  title: 'Базовые глаголы',
  description: '10 частотных глаголов в вежливой форме на -masu: три группы спряжения, настоящее и прошедшее время.',
  order: 6,
  contentType: 'grammar',
  prerequisiteBlockId: 'n5-kanji',
  lessons: N5_VERBS_LESSONS,
  exam: {
    id: 'n5-verbs-exam',
    blockId: 'n5-verbs',
    title: 'Экзамен: Базовые глаголы',
    description: 'Проверка вежливой формы (-masu) десяти базовых глаголов.',
    questionCount: 10,
    passingScore: 0.8,
    xpReward: 220,
  },
}

export * from './n5Verbs.points'

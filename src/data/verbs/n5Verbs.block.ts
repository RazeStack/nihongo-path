import { N5_VERBS_LESSONS } from './n5Verbs.lessons'
import type { BlockDefinition } from '@/types/content'

export const N5_VERBS_BLOCK: BlockDefinition = {
  id: 'n5-verbs',
  levelId: 'n5',
  title: 'Базовые глаголы',
  description: '14 частотных глаголов и конструкций: три группы спряжения на -masu, あります/います, たいです и できます.',
  order: 7,
  contentType: 'grammar',
  prerequisiteBlockId: 'n5-kanji',
  lessons: N5_VERBS_LESSONS,
  exam: {
    id: 'n5-verbs-exam',
    blockId: 'n5-verbs',
    title: 'Экзамен: Базовые глаголы',
    description: 'Проверка вежливой формы (-masu) базовых глаголов, あります/います, たいです и できます.',
    questionCount: 16,
    passingScore: 0.8,
    xpReward: 240,
  },
}

export * from './n5Verbs.points'

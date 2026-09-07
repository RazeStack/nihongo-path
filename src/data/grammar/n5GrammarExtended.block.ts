import { N5_GRAMMAR_EXTENDED_LESSONS } from './n5GrammarExtended.lessons'
import type { BlockDefinition } from '@/types/content'

export const N5_GRAMMAR_EXTENDED_BLOCK: BlockDefinition = {
  id: 'n5-grammar-extended',
  levelId: 'n5',
  title: 'て-форма и связная речь',
  description: 'Просьбы, разрешение, запрет, обязанность, действие в процессе, «до/после», причина (から) и союзы, которые связывают предложения друг с другом.',
  order: 9,
  contentType: 'grammar',
  prerequisiteBlockId: 'n5-adjectives',
  lessons: N5_GRAMMAR_EXTENDED_LESSONS,
  exam: {
    id: 'n5-grammar-extended-exam',
    blockId: 'n5-grammar-extended',
    title: 'Экзамен: て-форма и связная речь',
    description: 'Проверка てформы и её производных (ています, てください, てもいいです, てはいけません, なければなりません), まえに/あとで, より, から-причины и союзов между предложениями.',
    questionCount: 24,
    passingScore: 0.8,
    xpReward: 280,
  },
}

export * from './n5GrammarExtended.points'

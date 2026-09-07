import { N3_GRAMMAR_EXTENT_LESSONS } from './n3GrammarExtent.lessons'
import type { BlockDefinition } from '@/types/content'

export const N3_GRAMMAR_EXTENT_BLOCK: BlockDefinition = {
  id: 'n3-grammar-extent',
  levelId: 'n3',
  title: 'Степень и вынужденность',
  description: 'さえ, だけでなく, ようがない, わけにはいかない, ないわけではない, しかない.',
  order: 4,
  contentType: 'grammar',
  prerequisiteBlockId: 'n3-grammar-contrast',
  lessons: N3_GRAMMAR_EXTENT_LESSONS,
  exam: {
    id: 'n3-grammar-extent-exam',
    blockId: 'n3-grammar-extent',
    title: 'Экзамен: Степень и вынужденность',
    description: 'Проверка さえ, だけでなく, ようがない, わけにはいかない, ないわけではない и しかない.',
    questionCount: 14,
    passingScore: 0.8,
    xpReward: 240,
  },
}

export * from './n3GrammarExtent.points'

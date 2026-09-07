import { N3_VOCABULARY_LESSONS } from './n3Vocabulary.lessons'
import type { BlockDefinition } from '@/types/content'

export const N3_VOCABULARY_BLOCK: BlockDefinition = {
  id: 'n3-vocabulary',
  levelId: 'n3',
  title: 'Словарь N3',
  description: '30 слов: общество, технологии, экономика, отношения и первые устойчивые вежливые выражения.',
  order: 2,
  contentType: 'vocabulary',
  prerequisiteBlockId: 'n3-grammar',
  lessons: N3_VOCABULARY_LESSONS,
  exam: {
    id: 'n3-vocabulary-exam',
    blockId: 'n3-vocabulary',
    title: 'Экзамен: Словарь N3',
    description: 'Проверка знания слов из всех пяти тем в обе стороны.',
    questionCount: 20,
    passingScore: 0.8,
    xpReward: 260,
  },
}

export * from './n3Vocabulary.words'

import { N4_VOCABULARY_LESSONS } from './n4Vocabulary.lessons'
import type { BlockDefinition } from '@/types/content'

export const N4_VOCABULARY_BLOCK: BlockDefinition = {
  id: 'n4-vocabulary',
  levelId: 'n4',
  title: 'Словарь N4',
  description: '30 слов по пяти темам: работа, учёба, природа и погода, эмоции, абстрактные понятия.',
  order: 2,
  contentType: 'vocabulary',
  prerequisiteBlockId: 'n4-grammar',
  lessons: N4_VOCABULARY_LESSONS,
  exam: {
    id: 'n4-vocabulary-exam',
    blockId: 'n4-vocabulary',
    title: 'Экзамен: Словарь N4',
    description: 'Проверка знания слов из всех пяти тем в обе стороны — слово→перевод и перевод→слово.',
    questionCount: 20,
    passingScore: 0.8,
    xpReward: 240,
  },
}

export * from './n4Vocabulary.words'

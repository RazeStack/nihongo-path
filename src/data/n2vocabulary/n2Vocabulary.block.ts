import { N2_VOCABULARY_LESSONS } from './n2Vocabulary.lessons'
import type { BlockDefinition } from '@/types/content'

export const N2_VOCABULARY_BLOCK: BlockDefinition = {
  id: 'n2-vocabulary',
  levelId: 'n2',
  title: 'Словарь N2',
  description: '30 слов: деловой японский, медиа, наука, абстрактная мысль и второй слой формальных оборотов.',
  order: 2,
  contentType: 'vocabulary',
  prerequisiteBlockId: 'n2-grammar',
  lessons: N2_VOCABULARY_LESSONS,
  exam: {
    id: 'n2-vocabulary-exam',
    blockId: 'n2-vocabulary',
    title: 'Экзамен: Словарь N2',
    description: 'Проверка знания слов из всех пяти тем в обе стороны.',
    questionCount: 20,
    passingScore: 0.8,
    xpReward: 280,
  },
}

export * from './n2Vocabulary.words'

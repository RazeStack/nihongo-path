import { N5_VOCABULARY_LESSONS } from './n5Vocabulary.lessons'
import type { BlockDefinition } from '@/types/content'

export const N5_VOCABULARY_BLOCK: BlockDefinition = {
  id: 'n5-vocabulary',
  levelId: 'n5',
  title: 'Базовая лексика',
  description: '36 повседневных слов по темам: люди, еда, дом, транспорт, время, места.',
  order: 4,
  contentType: 'vocabulary',
  prerequisiteBlockId: 'n5-grammar-basics',
  lessons: N5_VOCABULARY_LESSONS,
  exam: {
    id: 'n5-vocabulary-exam',
    blockId: 'n5-vocabulary',
    title: 'Экзамен: Базовая лексика',
    description: 'Проверка знания слов из всех шести тем в обе стороны — слово→перевод и перевод→слово.',
    questionCount: 18,
    passingScore: 0.8,
    xpReward: 220,
  },
}

export * from './n5Vocabulary.words'

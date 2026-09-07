import { N4_VOCABULARY_LESSONS } from './n4Vocabulary.lessons'
import type { BlockDefinition } from '@/types/content'

export const N4_VOCABULARY_BLOCK: BlockDefinition = {
  id: 'n4-vocabulary',
  levelId: 'n4',
  title: 'Словарь N4',
  description: '702 слова по 19 темам: работа, учёба, природа и погода, эмоции, абстрактные понятия, общество, технологии, отношения, путешествия, здоровье, характер, еда, дом и быт, одежда, транспорт, глаголы, прилагательные, наречия и повседневные ситуации.',
  order: 5,
  contentType: 'vocabulary',
  prerequisiteBlockId: 'n4-grammar-additional',
  lessons: N4_VOCABULARY_LESSONS,
  exam: {
    id: 'n4-vocabulary-exam',
    blockId: 'n4-vocabulary',
    title: 'Экзамен: Словарь N4',
    description: 'Проверка знания слов из всех тем в обе стороны — слово→перевод и перевод→слово.',
    questionCount: 30,
    passingScore: 0.8,
    xpReward: 320,
  },
}

export * from './n4Vocabulary.words'

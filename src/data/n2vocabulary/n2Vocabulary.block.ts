import { N2_VOCABULARY_LESSONS } from './n2Vocabulary.lessons'
import type { BlockDefinition } from '@/types/content'

export const N2_VOCABULARY_BLOCK: BlockDefinition = {
  id: 'n2-vocabulary',
  levelId: 'n2',
  title: 'Словарь N2',
  description: '223 слова по 17 темам: бизнес, общество, экономика, психология, культура, здоровье, технологии, экология, карьера и устойчивые выражения.',
  order: 6,
  contentType: 'vocabulary',
  prerequisiteBlockId: 'n2-grammar-expressive',
  lessons: N2_VOCABULARY_LESSONS,
  exam: {
    id: 'n2-vocabulary-exam',
    blockId: 'n2-vocabulary',
    title: 'Экзамен: Словарь N2',
    description: 'Проверка знания слов из всех тем в обе стороны.',
    questionCount: 24,
    passingScore: 0.8,
    xpReward: 320,
  },
}

export * from './n2Vocabulary.words'

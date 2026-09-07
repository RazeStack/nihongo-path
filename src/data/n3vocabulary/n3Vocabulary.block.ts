import { N3_VOCABULARY_LESSONS } from './n3Vocabulary.lessons'
import type { BlockDefinition } from '@/types/content'

export const N3_VOCABULARY_BLOCK: BlockDefinition = {
  id: 'n3-vocabulary',
  levelId: 'n3',
  title: 'Словарь N3',
  description: '2000 слов по 23 темам: общество, технологии, экономика, отношения, формальная лексика (кэйго), медиа, наука, психология, работа, экология, здоровье, путешествия, еда, дом, спорт, искусство, история, образование, абстрактные понятия и устойчивые выражения.',
  order: 7,
  contentType: 'vocabulary',
  prerequisiteBlockId: 'n3-grammar-advanced',
  lessons: N3_VOCABULARY_LESSONS,
  exam: {
    id: 'n3-vocabulary-exam',
    blockId: 'n3-vocabulary',
    title: 'Экзамен: Словарь N3',
    description: 'Проверка знания слов из всех тем в обе стороны.',
    questionCount: 30,
    passingScore: 0.8,
    xpReward: 400,
  },
}

export * from './n3Vocabulary.words'

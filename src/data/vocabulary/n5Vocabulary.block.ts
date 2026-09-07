import { N5_VOCABULARY_LESSONS } from './n5Vocabulary.lessons'
import type { BlockDefinition } from '@/types/content'

export const N5_VOCABULARY_BLOCK: BlockDefinition = {
  id: 'n5-vocabulary',
  levelId: 'n5',
  title: 'Базовая лексика',
  description: '800 повседневных слов по 38 темам: приветствия, семья, еда, напитки, дом, транспорт, места, учёба, работа, погода, цвета, животные, тело, одежда, действия, прилагательные, глаголы, спорт, покупки, здоровье, природа, школьные предметы, направления, наречия, вопросительные и указательные слова и многое другое — полный словарный запас уровня N5.',
  order: 5,
  contentType: 'vocabulary',
  prerequisiteBlockId: 'n5-grammar-particles-2',
  lessons: N5_VOCABULARY_LESSONS,
  exam: {
    id: 'n5-vocabulary-exam',
    blockId: 'n5-vocabulary',
    title: 'Экзамен: Базовая лексика',
    description: 'Проверка знания слов из всех тем в обе стороны — слово→перевод и перевод→слово.',
    questionCount: 50,
    passingScore: 0.8,
    xpReward: 350,
  },
}

export * from './n5Vocabulary.words'

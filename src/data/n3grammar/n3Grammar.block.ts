import { N3_GRAMMAR_LESSONS } from './n3Grammar.lessons'
import type { BlockDefinition } from '@/types/content'

export const N3_GRAMMAR_BLOCK: BlockDefinition = {
  id: 'n3-grammar',
  levelId: 'n3',
  title: 'Грамматика N3',
  description: 'Восемь конструкций среднего уровня: ことになる, ことにする, わけ, ため, ように, のに, ばかり и「внешний вид」そう.',
  order: 1,
  contentType: 'grammar',
  lessons: N3_GRAMMAR_LESSONS,
  exam: {
    id: 'n3-grammar-exam',
    blockId: 'n3-grammar',
    title: 'Экзамен: Грамматика N3',
    description: 'Проверка восьми конструкций среднего уровня.',
    questionCount: 8,
    passingScore: 0.75,
    xpReward: 280,
  },
}

export * from './n3Grammar.points'

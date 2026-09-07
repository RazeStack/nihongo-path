import { N2_GRAMMAR_LESSONS } from './n2Grammar.lessons'
import type { BlockDefinition } from '@/types/content'

export const N2_GRAMMAR_BLOCK: BlockDefinition = {
  id: 'n2-grammar',
  levelId: 'n2',
  title: 'Грамматика N2: предположения и оценка',
  description: 'にもかかわらず, わりに, に違いない, かねない, ざるを得ない, ものだ.',
  order: 1,
  contentType: 'grammar',
  lessons: N2_GRAMMAR_LESSONS,
  exam: {
    id: 'n2-grammar-exam',
    blockId: 'n2-grammar',
    title: 'Экзамен: Грамматика N2',
    description: 'Проверка にもかかわらず, わりに, に違いない, かねない, ざるを得ない и ものだ.',
    questionCount: 12,
    passingScore: 0.8,
    xpReward: 260,
  },
}

export * from './n2Grammar.points'

import { N2_GRAMMAR_LESSONS } from './n2Grammar.lessons'
import type { BlockDefinition } from '@/types/content'

export const N2_GRAMMAR_BLOCK: BlockDefinition = {
  id: 'n2-grammar',
  levelId: 'n2',
  title: 'Грамматика N2',
  description: 'Формальные конструкции продвинутого уровня: にもかかわらず, わりに, としても, つつ, に違いない, かねない, ざるを得ない, ものだ.',
  order: 1,
  contentType: 'grammar',
  lessons: N2_GRAMMAR_LESSONS,
  exam: {
    id: 'n2-grammar-exam',
    blockId: 'n2-grammar',
    title: 'Экзамен: Грамматика N2',
    description: 'Проверка восьми формальных конструкций продвинутого уровня.',
    questionCount: 8,
    passingScore: 0.75,
    xpReward: 300,
  },
}

export * from './n2Grammar.points'

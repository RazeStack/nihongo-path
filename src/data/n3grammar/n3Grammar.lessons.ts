import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N3_GRAMMAR_POINTS } from './n3Grammar.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n3-grammar'

const introLesson: LessonDefinition = {
  id: 'n3-grammar-intro',
  blockId: BLOCK_ID,
  title: 'Грамматика N3: от фактов к нюансам',
  description: 'Чем N3 отличается от N4',
  order: 0,
  theory: [
    { type: 'heading', text: 'Не факты, а оттенки смысла' },
    {
      type: 'paragraph',
      text: 'На N4 конструкции в основном описывали факты: действие идёт (ています), разрешено (てもいい), условие выполнено (たら). На N3 добавляются оттенки: чьё это было решение (ことになる/ことにする), логичный вывод (わけ), цель (ため/ように), неожиданность (のに), недавность (ばかり) и впечатление против услышанного факта (そう).',
    },
    {
      type: 'note',
      text: 'Многие из этих конструкций не переводятся одним словом на русский — важно понять ситуацию, в которой их используют, а не зубрить перевод.',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const grammarLessons: LessonDefinition[] = N3_GRAMMAR_POINTS.map((point, index) =>
  buildGrammarLesson(point, N3_GRAMMAR_POINTS, BLOCK_ID, index + 1),
)

export const N3_GRAMMAR_LESSONS: LessonDefinition[] = [introLesson, ...grammarLessons]

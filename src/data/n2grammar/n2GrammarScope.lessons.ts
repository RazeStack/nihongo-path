import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N2_GRAMMAR_SCOPE_POINTS } from './n2GrammarScope.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n2-grammar-scope'

const introLesson: LessonDefinition = {
  id: 'n2-grammar-scope-intro',
  blockId: BLOCK_ID,
  title: 'Дополнение и охват',
  description: '«Вдобавок», «не только», «через», «на протяжении» — книжные обороты для расширения мысли',
  order: 0,
  theory: [
    { type: 'heading', text: 'Письменный японский любит уточнять' },
    {
      type: 'paragraph',
      text: 'も (N5) и だけでなく (N3) прекрасно работают в разговоре, но в статьях и официальных документах используются более точные, формальные обороты: 上に (вдобавок к тому же), に加えて (в дополнение к), のみならず (не только), を通じて (посредством), にわたって (на протяжении).',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const pointLessons: LessonDefinition[] = N2_GRAMMAR_SCOPE_POINTS.map((point, index) =>
  buildGrammarLesson(point, N2_GRAMMAR_SCOPE_POINTS, BLOCK_ID, index + 1),
)

export const N2_GRAMMAR_SCOPE_LESSONS: LessonDefinition[] = [introLesson, ...pointLessons]

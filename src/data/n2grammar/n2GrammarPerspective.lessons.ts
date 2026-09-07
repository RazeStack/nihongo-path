import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N2_GRAMMAR_PERSPECTIVE_POINTS } from './n2GrammarPerspective.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n2-grammar-perspective'

const introLesson: LessonDefinition = {
  id: 'n2-grammar-perspective-intro',
  blockId: BLOCK_ID,
  title: 'Сравнение и точка зрения',
  description: '«Отнюдь не», «хотя» (книжн.), «с точки зрения», «словно», «вокруг»',
  order: 0,
  theory: [
    { type: 'heading', text: 'Последний слой нюансов' },
    {
      type: 'paragraph',
      text: 'Этот блок закрывает оставшиеся оттенки сравнения и позиции: резкое опровержение ожидания (どころか), книжная уступка без эмоций (ものの), взгляд с чужой точки зрения (にしたら), формальное сравнение (かのようだ), тема спора (をめぐって) и решимость после решения (上は).',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const pointLessons: LessonDefinition[] = N2_GRAMMAR_PERSPECTIVE_POINTS.map((point, index) =>
  buildGrammarLesson(point, N2_GRAMMAR_PERSPECTIVE_POINTS, BLOCK_ID, index + 1),
)

export const N2_GRAMMAR_PERSPECTIVE_LESSONS: LessonDefinition[] = [introLesson, ...pointLessons]

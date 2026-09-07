import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N2_GRAMMAR_EXPRESSIVE_POINTS } from './n2GrammarExpressive.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n2-grammar-expressive'

const introLesson: LessonDefinition = {
  id: 'n2-grammar-expressive-intro',
  blockId: BLOCK_ID,
  title: 'Экспрессивные и книжные формы',
  description: 'Последний штрих: крайняя мера, незаменимость, обобщение, постепенный процесс',
  order: 0,
  theory: [
    { type: 'heading', text: 'Последний блок грамматики курса' },
    {
      type: 'paragraph',
      text: 'Четыре последние конструкции курса передают тонкие оттенки: てまで — крайняя, возможно чрезмерная мера ради цели; ぬきには〜ない — категорическая незаменимость условия; というものだ — философское обобщение; つつある — формальное описание постепенного процесса.',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const pointLessons: LessonDefinition[] = N2_GRAMMAR_EXPRESSIVE_POINTS.map((point, index) =>
  buildGrammarLesson(point, N2_GRAMMAR_EXPRESSIVE_POINTS, BLOCK_ID, index + 1),
)

export const N2_GRAMMAR_EXPRESSIVE_LESSONS: LessonDefinition[] = [introLesson, ...pointLessons]

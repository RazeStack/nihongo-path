import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N3_GRAMMAR_ADVANCED_POINTS } from './n3GrammarAdvanced.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n3-grammar-advanced'

const introLesson: LessonDefinition = {
  id: 'n3-grammar-advanced-intro',
  blockId: BLOCK_ID,
  title: 'Комбинации и связки момента',
  description: 'Каузатив-пассив и обороты «как только», «взяв за повод», «на основе»',
  order: 0,
  theory: [
    { type: 'heading', text: 'Складываем изученное' },
    {
      type: 'paragraph',
      text: 'Каузатив-пассив (使役受身形) — не новая форма, а сочетание уже знакомых по N4 побудительной и пассивной форм: «меня заставили сделать». Дальше — несколько формальных связок момента и повода, характерных для рассказов и статей: とたんに («как только»), をきっかけに («взяв за повод»), をもとに («на основе»), かわりに («вместо»).',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const pointLessons: LessonDefinition[] = N3_GRAMMAR_ADVANCED_POINTS.map((point, index) =>
  buildGrammarLesson(point, N3_GRAMMAR_ADVANCED_POINTS, BLOCK_ID, index + 1),
)

export const N3_GRAMMAR_ADVANCED_LESSONS: LessonDefinition[] = [introLesson, ...pointLessons]

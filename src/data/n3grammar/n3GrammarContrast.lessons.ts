import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N3_GRAMMAR_CONTRAST_POINTS } from './n3GrammarContrast.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n3-grammar-contrast'

const introLesson: LessonDefinition = {
  id: 'n3-grammar-contrast-intro',
  blockId: BLOCK_ID,
  title: 'Оттенки «но» и «склонен к»',
  description: 'Уступка, противопоставление и нежелательная тенденция',
  order: 0,
  theory: [
    { type: 'heading', text: 'Больше, чем でも' },
    {
      type: 'paragraph',
      text: 'でも и が (N5) хороши для простого «но». На N3 добавляются более точные оттенки: 反面 — противоположные качества ОДНОГО И ТОГО ЖЕ предмета; がち — нежелательная, но частая тенденция; としても — гипотетическая уступка; にしては — приятное удивление относительно ожиданий.',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const pointLessons: LessonDefinition[] = N3_GRAMMAR_CONTRAST_POINTS.map((point, index) =>
  buildGrammarLesson(point, N3_GRAMMAR_CONTRAST_POINTS, BLOCK_ID, index + 1),
)

export const N3_GRAMMAR_CONTRAST_LESSONS: LessonDefinition[] = [introLesson, ...pointLessons]

import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N5_ADJECTIVES_POINTS } from './n5Adjectives.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n5-adjectives'

const introLesson: LessonDefinition = {
  id: 'n5-adjectives-intro',
  blockId: BLOCK_ID,
  title: 'い-прилагательные и な-прилагательные',
  description: 'Два типа прилагательных и как они отрицаются',
  order: 0,
  theory: [
    { type: 'heading', text: 'Два типа прилагательных' },
    {
      type: 'paragraph',
      text: 'В японском прилагательные делятся на два типа по тому, как они себя ведут грамматически: い-прилагательные заканчиваются на い и спрягаются сами, а な-прилагательные ведут себя как существительные и опираются на です/じゃない.',
    },
    {
      type: 'table',
      headers: ['Тип', 'Признак', 'Отрицание', 'Пример'],
      rows: [
        ['い-прилагательное', 'оканчивается на -i', 'убрать い, добавить くない', 'おおきい → おおきくない'],
        ['な-прилагательное', 'не оканчивается на -i (или похоже, но особое)', 'добавить じゃない', 'きれい → きれいじゃない'],
      ],
    },
    {
      type: 'warning',
      text: 'きれい, きらい и いい внешне похожи на い-прилагательные (заканчиваются на い), но きれい и きらい — な-прилагательные, а いい — единственное неправильное い-прилагательное. Такие исключения нужно запоминать отдельно.',
    },
  ],
  miniCheck: [
    {
      id: 'n5-adjectives-intro-check-0',
      question: 'Как отрицается な-прилагательное, например きれい?',
      options: ['きれくない', 'きれいじゃない', 'きれいません', 'Никак не меняется'],
      correctIndex: 1,
      explanation: 'な-прилагательные ведут себя как существительные — отрицание через じゃない.',
    },
  ],
  itemIds: [],
  xpReward: 20,
}

const adjectiveLessons: LessonDefinition[] = N5_ADJECTIVES_POINTS.map((point, index) =>
  buildGrammarLesson(point, N5_ADJECTIVES_POINTS, BLOCK_ID, index + 1),
)

export const N5_ADJECTIVES_LESSONS: LessonDefinition[] = [introLesson, ...adjectiveLessons]

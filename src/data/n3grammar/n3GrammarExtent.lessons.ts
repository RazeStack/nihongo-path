import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N3_GRAMMAR_EXTENT_POINTS } from './n3GrammarExtent.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n3-grammar-extent'

const introLesson: LessonDefinition = {
  id: 'n3-grammar-extent-intro',
  blockId: BLOCK_ID,
  title: 'Степень и вынужденность',
  description: '«Даже», «не только», «остаётся только», «нет способа»',
  order: 0,
  theory: [
    { type: 'heading', text: 'Крайние случаи и отсутствие выбора' },
    {
      type: 'paragraph',
      text: 'Этот блок закрывает две смежные темы: как усиливать утверждение через крайний пример (さえ — «даже», だけでなく — «не только... но и») и как говорить об отсутствии выбора или возможности (しかない — «остаётся только», ようがない — «нет способа», わけにはいかない — «не могу себе позволить»).',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const pointLessons: LessonDefinition[] = N3_GRAMMAR_EXTENT_POINTS.map((point, index) =>
  buildGrammarLesson(point, N3_GRAMMAR_EXTENT_POINTS, BLOCK_ID, index + 1),
)

export const N3_GRAMMAR_EXTENT_LESSONS: LessonDefinition[] = [introLesson, ...pointLessons]

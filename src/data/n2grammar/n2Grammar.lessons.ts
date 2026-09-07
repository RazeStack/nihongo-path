import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N2_GRAMMAR_POINTS } from './n2Grammar.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n2-grammar'

const introLesson: LessonDefinition = {
  id: 'n2-grammar-intro',
  blockId: BLOCK_ID,
  title: 'Грамматика N2: формальный регистр',
  description: 'Книжные аналоги уже знакомых конструкций',
  order: 0,
  theory: [
    { type: 'heading', text: 'Тот же смысл, другой стиль' },
    {
      type: 'paragraph',
      text: 'Многие конструкции N2 — это не новые идеи, а более формальные/письменные способы выразить то, что уже умеешь говорить проще. にもかかわらず ≈ のに (N3), つつ ≈ ながら (N4). Разница не в смысле, а в том, где уместно так говорить: N2-варианты звучат в новостях, документах, деловой переписке — там, где のに или ながら казались бы слишком разговорными.',
    },
    {
      type: 'note',
      text: 'Учись слышать/видеть регистр речи — это то, что отличает N2 от N3 больше, чем чистая грамматика.',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const grammarLessons: LessonDefinition[] = N2_GRAMMAR_POINTS.map((point, index) =>
  buildGrammarLesson(point, N2_GRAMMAR_POINTS, BLOCK_ID, index + 1),
)

export const N2_GRAMMAR_LESSONS: LessonDefinition[] = [introLesson, ...grammarLessons]

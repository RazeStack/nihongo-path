import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N4_GRAMMAR_ADDITIONAL_POINTS } from './n4GrammarAdditional.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n4-grammar-additional'

const introLesson: LessonDefinition = {
  id: 'n4-grammar-additional-intro',
  blockId: BLOCK_ID,
  title: 'Причины, уступки и степень',
  description: 'Более естественные способы объяснять, перечислять и уточнять степень',
  order: 0,
  theory: [
    { type: 'heading', text: 'Заполняем оставшиеся пробелы N4' },
    {
      type: 'paragraph',
      text: 'В этом блоке — конструкции, без которых речь на N4 всё ещё звучит слишком просто: более мягкая причина (ので) в паре с から, уступка (のに), перечисление аргументов (し) и действий (たり〜たり), неизменное состояние (まま), избыточная степень (すぎる), лёгкость/трудность действия (やすい/にくい) и особые оттенки действия — попробовать (てみる), сделать заранее (ておく), сделать окончательно (てしまう) и постепенное изменение (ようになる/ようにする).',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const pointLessons: LessonDefinition[] = N4_GRAMMAR_ADDITIONAL_POINTS.map((point, index) =>
  buildGrammarLesson(point, N4_GRAMMAR_ADDITIONAL_POINTS, BLOCK_ID, index + 1),
)

export const N4_GRAMMAR_ADDITIONAL_LESSONS: LessonDefinition[] = [introLesson, ...pointLessons]

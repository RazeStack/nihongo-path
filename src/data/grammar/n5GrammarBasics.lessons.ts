import { buildGrammarLesson } from './buildGrammarLesson'
import { N5_GRAMMAR_BASICS_POINTS } from './n5GrammarBasics.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n5-grammar-basics'

const introLesson: LessonDefinition = {
  id: 'n5-grammar-basics-intro',
  blockId: BLOCK_ID,
  title: 'Что такое частицы',
  description: 'Маленькие слова, без которых японское предложение не работает',
  order: 0,
  theory: [
    { type: 'heading', text: 'Зачем нужны частицы' },
    {
      type: 'paragraph',
      text: 'В русском языке роль слова в предложении часто показывают окончания («книгу» — винительный падеж). В японском нет падежных окончаний — вместо них после каждого существительного ставится отдельное короткое слово-частица, которое показывает его роль: это тема? подлежащее? объект действия? место? время?',
    },
    {
      type: 'paragraph',
      text: 'Хорошая новость: частицы почти всегда состоят из одного знака хираганы и не меняются — не надо ничего спрягать или склонять. Плохая новость: у некоторых частиц (особенно は и が) роль пересекается, и разница ощущается только с практикой на живых примерах.',
    },
    {
      type: 'table',
      headers: ['Частица', 'Примерная роль'],
      rows: [
        ['は', 'тема — «что касается X»'],
        ['が', 'подлежащее / новая информация'],
        ['を', 'прямое дополнение'],
        ['に', 'направление, момент времени'],
        ['で', 'место действия, средство'],
      ],
    },
    {
      type: 'note',
      text: 'Порядок слов в японском гораздо свободнее русского именно благодаря частицам — по ним понятно, кто есть кто в предложении, даже если порядок слов необычный.',
    },
  ],
  miniCheck: [
    {
      id: 'n5-grammar-basics-intro-check-0',
      question: 'Что в японском предложении показывает роль слова (подлежащее, объект, место)?',
      options: ['Порядок слов', 'Частица после слова', 'Ударение', 'Заглавная буква'],
      correctIndex: 1,
      explanation: 'В японском вместо падежных окончаний используются частицы — короткие служебные слова после существительного.',
    },
  ],
  itemIds: [],
  xpReward: 20,
}

const pointLessons: LessonDefinition[] = N5_GRAMMAR_BASICS_POINTS.map((point, index) =>
  buildGrammarLesson(point, N5_GRAMMAR_BASICS_POINTS, BLOCK_ID, index + 1),
)

export const N5_GRAMMAR_BASICS_LESSONS: LessonDefinition[] = [introLesson, ...pointLessons]

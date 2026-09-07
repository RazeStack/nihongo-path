import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N4_GRAMMAR_SPECULATION_POINTS } from './n4GrammarSpeculation.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n4-grammar-speculation'

const introLesson: LessonDefinition = {
  id: 'n4-grammar-speculation-intro',
  blockId: BLOCK_ID,
  title: 'Как говорить, когда не уверен на 100%',
  description: 'Предположения, ожидания, намерения и впечатления',
  order: 0,
  theory: [
    { type: 'heading', text: 'Разные степени уверенности' },
    {
      type: 'paragraph',
      text: 'До сих пор почти все предложения были утверждениями «это так» или «это не так». В реальной речи гораздо чаще нужно передать оттенок: «наверное», «может быть», «должно быть», «похоже, что», «я решил, что». В этом блоке — целый набор конструкций именно для таких промежуточных степеней уверенности.',
    },
    {
      type: 'table',
      headers: ['Конструкция', 'Примерная сила уверенности'],
      rows: [
        ['はず', 'высокая — логический вывод из фактов'],
        ['でしょう', 'высокая-средняя — «скорее всего»'],
        ['そう (по виду) / みたい', 'средняя — впечатление от увиденного'],
        ['かもしれない', 'низкая — «а вдруг»'],
      ],
    },
  ],
  miniCheck: [
    {
      id: 'n4-grammar-speculation-intro-check-0',
      question: 'Какая конструкция выражает наименьшую уверенность?',
      options: ['はず', 'でしょう', 'かもしれない', 'という'],
      correctIndex: 2,
      explanation: 'かもしれない — «а вдруг, возможно» — самая осторожная и наименее уверенная форма предположения из этого списка.',
    },
  ],
  itemIds: [],
  xpReward: 20,
}

const pointLessons: LessonDefinition[] = N4_GRAMMAR_SPECULATION_POINTS.map((point, index) =>
  buildGrammarLesson(point, N4_GRAMMAR_SPECULATION_POINTS, BLOCK_ID, index + 1),
)

export const N4_GRAMMAR_SPECULATION_LESSONS: LessonDefinition[] = [introLesson, ...pointLessons]

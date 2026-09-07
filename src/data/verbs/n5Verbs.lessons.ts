import { buildGrammarLesson } from '@/data/grammar/buildGrammarLesson'
import { N5_VERBS_POINTS } from './n5Verbs.points'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n5-verbs'

const introLesson: LessonDefinition = {
  id: 'n5-verbs-intro',
  blockId: BLOCK_ID,
  title: 'Группы глаголов и вежливая форма',
  description: 'Как из словарной формы получить форму на -masu',
  order: 0,
  theory: [
    { type: 'heading', text: 'Три группы глаголов' },
    {
      type: 'paragraph',
      text: 'В японском все глаголы делятся на три группы, и от группы зависит, как образуется вежливая форма на -masu, которую уже видели в уроке про ます.',
    },
    {
      type: 'table',
      headers: ['Группа', 'Признак', 'Правило для -masu', 'Пример'],
      rows: [
        ['1 группа (godan)', 'основа на -u (кроме -iru/-eru)', 'последний слог u→i + ます', 'のむ → のみます'],
        ['2 группа (ichidan)', 'основа на -iru/-eru', 'убрать る + ます', 'たべる → たべます'],
        ['Неправильные', 'する и くる', 'запоминаются отдельно', 'する→します, くる→きます'],
      ],
    },
    { type: 'heading', text: 'Четыре формы, которые нужно знать' },
    {
      type: 'table',
      headers: ['Форма', 'Значение', 'Пример (たべる)'],
      rows: [
        ['Настоящее/будущее, да', 'делаю / буду делать', 'たべます'],
        ['Настоящее/будущее, нет', 'не делаю / не буду делать', 'たべません'],
        ['Прошедшее, да', 'сделал', 'たべました'],
        ['Прошедшее, нет', 'не сделал', 'たべませんでした'],
      ],
    },
    {
      type: 'note',
      text: 'В упражнениях этого блока проверяется форма настоящего времени (-masu) — остальные три формы разобраны в теории каждого глагола, чтобы ты видел полную картину.',
    },
  ],
  miniCheck: [
    {
      id: 'n5-verbs-intro-check-0',
      question: 'Как образуется форма на -masu у глагола 2 группы (например たべる)?',
      options: ['Добавить ます в конец без изменений', 'Убрать る, добавить ます', 'Заменить последний слог на и-звук', 'Это неправильный глагол'],
      correctIndex: 1,
      explanation: 'たべる → たべます: у 2 группы просто отбрасывается る.',
    },
  ],
  itemIds: [],
  xpReward: 20,
}

const verbLessons: LessonDefinition[] = N5_VERBS_POINTS.map((point, index) =>
  buildGrammarLesson(point, N5_VERBS_POINTS, BLOCK_ID, index + 1),
)

export const N5_VERBS_LESSONS: LessonDefinition[] = [introLesson, ...verbLessons]

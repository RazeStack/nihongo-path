import type { LessonDefinition } from '@/types/content'

export const N4_FINAL_EXAM_LESSONS: LessonDefinition[] = [
  {
    id: 'n4-final-exam-review',
    blockId: 'n4-final-exam',
    title: 'Итоговый обзор N4',
    description: 'Что проверяет финальный экзамен уровня',
    order: 0,
    theory: [
      { type: 'heading', text: 'Ты прошёл весь уровень N4' },
      {
        type: 'paragraph',
        text: 'Смешанная проверка по всему N4: たら/なら/ながら/そう, потенциальная/пассивная/побудительная формы, てあげる/てもらう/てくれる, предположения (でしょう/かもしれない/はず/つもり), причины и уступки (ので/のに/し), 702 слова словаря по 19 темам, 176 новых кандзи и понимание пяти более длинных текстов.',
      },
      {
        type: 'note',
        text: 'Проходной балл — 80%, как и на N5. После этого экзамена откроется N3.',
      },
    ],
    miniCheck: [],
    itemIds: [],
    xpReward: 20,
  },
]

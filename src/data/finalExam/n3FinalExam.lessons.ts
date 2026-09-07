import type { LessonDefinition } from '@/types/content'

export const N3_FINAL_EXAM_LESSONS: LessonDefinition[] = [
  {
    id: 'n3-final-exam-review',
    blockId: 'n3-final-exam',
    title: 'Итоговый обзор N3',
    description: 'Что проверяет финальный экзамен уровня',
    order: 0,
    theory: [
      { type: 'heading', text: 'Ты прошёл весь уровень N3' },
      {
        type: 'paragraph',
        text: 'Смешанная проверка по всему N3: восемь конструкций среднего уровня, лексика общества/технологий/экономики/отношений, 21 новый кандзи и понимание объявлений и рассуждений.',
      },
      { type: 'note', text: 'Проходной балл — 80%. После этого экзамена откроется N2 — последний уровень курса.' },
    ],
    miniCheck: [],
    itemIds: [],
    xpReward: 20,
  },
]

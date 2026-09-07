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
        text: 'Смешанная проверка по всему N3: 40 конструкций (решения ことになる/ことにする, формальные связки に対して/によって/として, уступка がち/反面, степень さえ/しかない, 敬語 お〜になる/いらっしゃる/伺う, каузатив-пассив), 162 слова лексики, 77 новых кандзи и понимание пяти текстов (объявление, рассуждение, деловое письмо, новостная статья, личные размышления).',
      },
      { type: 'note', text: 'Проходной балл — 80%. После этого экзамена откроется N2 — последний уровень курса.' },
    ],
    miniCheck: [],
    itemIds: [],
    xpReward: 20,
  },
]

import type { LessonDefinition } from '@/types/content'

export const N2_FINAL_EXAM_LESSONS: LessonDefinition[] = [
  {
    id: 'n2-final-exam-review',
    blockId: 'n2-final-exam',
    title: 'Итоговый обзор N2',
    description: 'Последний экзамен курса',
    order: 0,
    theory: [
      { type: 'heading', text: 'Ты дошёл до конца курса' },
      {
        type: 'paragraph',
        text: 'Смешанная проверка по всему N2: формальные конструкции, деловая/научная/медийная лексика, 20 кандзи и понимание новостных и деловых текстов. Это последний экзамен курса — после него пройдена вся программа от хираганы до N2.',
      },
      {
        type: 'note',
        text: 'Помни: это тренировочная (Mock) проверка внутри курса, а не официальный сертификационный экзамен JLPT.',
      },
    ],
    miniCheck: [],
    itemIds: [],
    xpReward: 20,
  },
]

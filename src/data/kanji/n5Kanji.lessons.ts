import { buildKanjiLesson } from './buildKanjiLesson'
import { N5_KANJI_ENTRIES, N5_KANJI_GROUPS } from './n5Kanji.entries'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n5-kanji'
const ALL_KANJI = N5_KANJI_GROUPS.flatMap((group) => N5_KANJI_ENTRIES[group])

const introLesson: LessonDefinition = {
  id: 'n5-kanji-intro',
  blockId: BLOCK_ID,
  title: 'Как устроен кандзи',
  description: 'Онъёми, кунъёми и почему кандзи учат вместе со словами',
  order: 0,
  theory: [
    { type: 'heading', text: 'Два вида чтений' },
    {
      type: 'paragraph',
      text: 'У большинства кандзи есть минимум два чтения. Онъёми (音読み) — чтение, пришедшее из китайского языка вместе с иероглифом; обычно используется, когда кандзи стоит в составе слова из нескольких иероглифов. Кунъёми (訓読み) — исконно японское чтение; обычно используется, когда кандзи стоит один, часто с окончанием хираганой.',
    },
    {
      type: 'example',
      japanese: '木 (き, kunyomi) — дерево само по себе. 木曜日 (もくようび, onyomi внутри слова) — четверг.',
      translation: 'Один и тот же знак, разное чтение в зависимости от контекста.',
    },
    {
      type: 'note',
      text: 'Не пытайся зазубрить кандзи в отрыве от слов — в этом курсе у каждого иероглифа сразу есть 2-3 реальных слова, в которых он встречается. Учи иероглиф вместе с ними.',
    },
    { type: 'warning', text: 'Некоторые слова читаются не по правилам онъёми/кунъёми — например 今日 (きょう, «сегодня»). Такие случаи отмечены отдельно.' },
  ],
  miniCheck: [
    {
      id: 'n5-kanji-intro-check-0',
      question: 'Онъёми — это чтение, которое обычно используется...',
      options: ['Когда кандзи стоит один', 'В составе слова из нескольких кандзи', 'Только в именах', 'Никогда не используется'],
      correctIndex: 1,
      explanation: 'Онъёми пришло из китайского и чаще встречается внутри составных слов, например 学校 (がっこう).',
    },
  ],
  itemIds: [],
  xpReward: 20,
}

const groupLessons: LessonDefinition[] = N5_KANJI_GROUPS.map((group, index) =>
  buildKanjiLesson(group, N5_KANJI_ENTRIES[group], ALL_KANJI, BLOCK_ID, index + 1),
)

export const N5_KANJI_LESSONS: LessonDefinition[] = [introLesson, ...groupLessons]
export { ALL_KANJI as N5_ALL_KANJI_ENTRIES }

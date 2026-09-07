import { buildKanjiLesson } from '@/data/kanji/buildKanjiLesson'
import { N3_KANJI_ENTRIES, N3_KANJI_GROUPS } from './n3Kanji.entries'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n3-kanji'
const ALL_KANJI = N3_KANJI_GROUPS.flatMap((group) => N3_KANJI_ENTRIES[group])

const introLesson: LessonDefinition = {
  id: 'n3-kanji-intro',
  blockId: BLOCK_ID,
  title: 'Кандзи N3: составные термины',
  description: 'Абстрактные двусложные слова из блока Словарь N3 — по кирпичикам',
  order: 0,
  theory: [
    { type: 'heading', text: 'Двусложные слова = два кандзи' },
    {
      type: 'paragraph',
      text: 'Почти вся "взрослая" лексика N3 (社会, 政治, 経済, 関係) — это слова из двух кандзи, каждый из которых вносит часть смысла. Зная оба знака по отдельности, легче запоминать новые комбинации: например 関 (связь) + 心 (сердце) = 関心 "интерес" — тот же 関, что и в 関係.',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const groupLessons: LessonDefinition[] = N3_KANJI_GROUPS.map((group, index) =>
  buildKanjiLesson(group, N3_KANJI_ENTRIES[group], ALL_KANJI, BLOCK_ID, index + 1),
)

export const N3_KANJI_LESSONS: LessonDefinition[] = [introLesson, ...groupLessons]
export { ALL_KANJI as N3_ALL_KANJI_ENTRIES }

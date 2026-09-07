import { buildKanjiLesson } from '@/data/kanji/buildKanjiLesson'
import { N4_KANJI_ENTRIES, N4_KANJI_GROUPS } from './n4Kanji.entries'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n4-kanji'
const ALL_KANJI = N4_KANJI_GROUPS.flatMap((group) => N4_KANJI_ENTRIES[group])

const introLesson: LessonDefinition = {
  id: 'n4-kanji-intro',
  blockId: BLOCK_ID,
  title: 'Кандзи N4: от отдельных слов к знакам',
  description: 'Большинство этих иероглифов уже знакомы как целые слова',
  order: 0,
  theory: [
    { type: 'heading', text: 'Знакомые слова, новый взгляд' },
    {
      type: 'paragraph',
      text: 'Почти все 176 кандзи этого блока уже встречались в блоке "Словарь N4" как целые слова (например 会社, 天気, 必要). Здесь они разбираются как отдельные знаки — с чтениями и связанными словами — чтобы ты видел, из каких "кирпичиков" состоят уже знакомые слова, и мог узнавать их в НОВЫХ комбинациях.',
    },
    {
      type: 'note',
      text: 'Например, зная 分 (わかる/ぶん/ふん) отдельно, легче понять и 分かる, и 三分, и 半分 — все они используют один и тот же знак.',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const groupLessons: LessonDefinition[] = N4_KANJI_GROUPS.map((group, index) =>
  buildKanjiLesson(group, N4_KANJI_ENTRIES[group], ALL_KANJI, BLOCK_ID, index + 1),
)

export const N4_KANJI_LESSONS: LessonDefinition[] = [introLesson, ...groupLessons]
export { ALL_KANJI as N4_ALL_KANJI_ENTRIES }

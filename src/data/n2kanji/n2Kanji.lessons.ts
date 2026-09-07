import { buildKanjiLesson } from '@/data/kanji/buildKanjiLesson'
import { N2_KANJI_ENTRIES, N2_KANJI_GROUPS } from './n2Kanji.entries'
import type { LessonDefinition } from '@/types/content'

const BLOCK_ID = 'n2-kanji'
const ALL_KANJI = N2_KANJI_GROUPS.flatMap((group) => N2_KANJI_ENTRIES[group])

const introLesson: LessonDefinition = {
  id: 'n2-kanji-intro',
  blockId: BLOCK_ID,
  title: 'Кандзи N2: последний рывок',
  description: 'Ещё 68 иероглифов из уже знакомых слов Словаря N2',
  order: 0,
  theory: [
    { type: 'heading', text: 'Последний блок кандзи курса' },
    {
      type: 'paragraph',
      text: 'Как и на N4-N3, эти 68 кандзи разбирают по кирпичикам слова, уже введённые в блоке Словарь N2 — деловые, научные, медийные, психологические и медицинские термины.',
    },
  ],
  miniCheck: [],
  itemIds: [],
  xpReward: 20,
}

const groupLessons: LessonDefinition[] = N2_KANJI_GROUPS.map((group, index) =>
  buildKanjiLesson(group, N2_KANJI_ENTRIES[group], ALL_KANJI, BLOCK_ID, index + 1),
)

export const N2_KANJI_LESSONS: LessonDefinition[] = [introLesson, ...groupLessons]
export { ALL_KANJI as N2_ALL_KANJI_ENTRIES }

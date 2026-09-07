import { N5_ALL_KANJI_ENTRIES } from './n5Kanji.lessons'
import { N4_ALL_KANJI_ENTRIES } from '@/data/n4kanji/n4Kanji.lessons'
import type { KanjiEntry } from '@/types/content'

export const ALL_KANJI_ENTRIES: KanjiEntry[] = [...N5_ALL_KANJI_ENTRIES, ...N4_ALL_KANJI_ENTRIES]

const BY_ID = new Map(ALL_KANJI_ENTRIES.map((entry) => [entry.id, entry]))

export function findKanjiEntryById(id: string): KanjiEntry | undefined {
  return BY_ID.get(id)
}

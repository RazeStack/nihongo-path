import { HIRAGANA_CHARACTERS } from '@/data/hiragana/hiragana.characters'
import { KATAKANA_CHARACTERS } from '@/data/katakana/katakana.characters'
import type { KanaChar } from '@/types/content'

export const ALL_KANA_CHARACTERS: KanaChar[] = [...HIRAGANA_CHARACTERS, ...KATAKANA_CHARACTERS]

const BY_ID = new Map(ALL_KANA_CHARACTERS.map((char) => [char.id, char]))

export function findKanaCharById(id: string): KanaChar | undefined {
  return BY_ID.get(id)
}

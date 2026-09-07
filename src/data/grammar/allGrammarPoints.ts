import { N5_GRAMMAR_BASICS_POINTS } from './n5GrammarBasics.points'
import { N5_VERBS_POINTS } from '@/data/verbs/n5Verbs.points'
import { N5_ADJECTIVES_POINTS } from '@/data/adjectives/n5Adjectives.points'
import { N4_GRAMMAR_POINTS } from '@/data/n4grammar/n4Grammar.points'
import { N3_GRAMMAR_POINTS } from '@/data/n3grammar/n3Grammar.points'
import { N2_GRAMMAR_POINTS } from '@/data/n2grammar/n2Grammar.points'
import type { GrammarPoint } from '@/types/content'

export const ALL_GRAMMAR_POINTS: GrammarPoint[] = [
  ...N5_GRAMMAR_BASICS_POINTS,
  ...N5_VERBS_POINTS,
  ...N5_ADJECTIVES_POINTS,
  ...N4_GRAMMAR_POINTS,
  ...N3_GRAMMAR_POINTS,
  ...N2_GRAMMAR_POINTS,
]

const BY_ID = new Map(ALL_GRAMMAR_POINTS.map((point) => [point.id, point]))

export function findGrammarPointById(id: string): GrammarPoint | undefined {
  return BY_ID.get(id)
}

import { N5_GRAMMAR_BASICS_POINTS } from './n5GrammarBasics.points'
import type { GrammarPoint } from '@/types/content'

export const ALL_GRAMMAR_POINTS: GrammarPoint[] = [...N5_GRAMMAR_BASICS_POINTS]

const BY_ID = new Map(ALL_GRAMMAR_POINTS.map((point) => [point.id, point]))

export function findGrammarPointById(id: string): GrammarPoint | undefined {
  return BY_ID.get(id)
}

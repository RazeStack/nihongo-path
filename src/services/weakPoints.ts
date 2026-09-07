import { ALL_KANA_CHARACTERS } from '@/data/kana/allKanaCharacters'
import { ALL_GRAMMAR_POINTS } from '@/data/grammar/allGrammarPoints'
import { ALL_VOCAB_WORDS } from '@/data/vocabulary/allVocabWords'
import { kanaSrsKey } from '@/services/questionGenerators/kanaQuestions'
import { grammarSrsKey } from '@/services/questionGenerators/grammarQuestions'
import { vocabSrsKey } from '@/services/questionGenerators/vocabQuestions'
import type { UserProgress } from '@/types/progress'

export interface WeakTopic {
  label: string
  accuracyPercent: number
}

interface Accumulator {
  correct: number
  total: number
}

function addStat(stats: Map<string, Accumulator>, label: string, progress: UserProgress, srsKey: string) {
  const correct = progress.correctCounts[srsKey] ?? 0
  const mistakes = progress.mistakeCounts[srsKey] ?? 0
  const total = correct + mistakes
  if (total === 0) return
  const stat = stats.get(label) ?? { correct: 0, total: 0 }
  stat.correct += correct
  stat.total += total
  stats.set(label, stat)
}

/**
 * Считает точность ответов по темам на основе накопленной статистики —
 * по каждому изученному типу контента (кана, грамматика, словарь и т.д.).
 * Новый тип контента добавляется сюда одной строкой, без переделки виджета.
 */
export function computeWeakTopics(progress: UserProgress): WeakTopic[] {
  const stats = new Map<string, Accumulator>()

  for (const char of ALL_KANA_CHARACTERS) {
    addStat(stats, char.script === 'hiragana' ? 'Хирагана' : 'Катакана', progress, kanaSrsKey(char))
  }
  for (const point of ALL_GRAMMAR_POINTS) {
    addStat(stats, 'Грамматика', progress, grammarSrsKey(point))
  }
  for (const word of ALL_VOCAB_WORDS) {
    addStat(stats, 'Словарь', progress, vocabSrsKey(word))
  }

  return [...stats.entries()]
    .map(([label, stat]) => ({ label, accuracyPercent: Math.round((stat.correct / stat.total) * 100) }))
    .sort((a, b) => a.accuracyPercent - b.accuracyPercent)
}

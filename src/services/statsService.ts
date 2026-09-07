import { getSrsStatus, type SrsStatus } from '@/services/srs'
import { kanaSrsKey } from '@/services/questionGenerators/kanaQuestions'
import type { KanaChar } from '@/types/content'
import type { UserProgress } from '@/types/progress'

export function computeKanaMasteryBreakdown(chars: KanaChar[], progress: UserProgress): Record<SrsStatus, number> {
  const breakdown: Record<SrsStatus, number> = { new: 0, learning: 0, familiar: 0, good: 0, mastered: 0 }
  for (const char of chars) {
    const status = getSrsStatus(progress.srs[kanaSrsKey(char)])
    breakdown[status] += 1
  }
  return breakdown
}

export function computeOverallAccuracy(progress: UserProgress): number {
  if (progress.totalAnswered === 0) return 0
  return Math.round((progress.totalCorrect / progress.totalAnswered) * 100)
}

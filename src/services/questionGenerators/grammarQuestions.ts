import { shuffle } from '@/utils/shuffle'
import type { DrillSentence, GrammarPoint } from '@/types/content'
import type { Question } from '@/types/practice'

/** Один вопрос "заполни пропуск" = конструкция + одно из её тренировочных предложений. */
export interface GrammarDrillItem {
  id: string
  srsKey: string
  point: GrammarPoint
  sentence: DrillSentence
}

export function grammarSrsKey(point: GrammarPoint): string {
  return `grammar:${point.id}`
}

export function flattenDrillItems(points: GrammarPoint[]): GrammarDrillItem[] {
  return points.flatMap((point) =>
    point.drillSentences.map((sentence, index) => ({
      id: `${point.id}-${index}`,
      srsKey: grammarSrsKey(point),
      point,
      sentence,
    })),
  )
}

export function generateGrammarQuestion(item: GrammarDrillItem, pool: GrammarDrillItem[]): Question {
  const correctAnswer = item.point.answerToken
  const distractorTokens = [...new Set(pool.map((entry) => entry.point.answerToken).filter((token) => token !== correctAnswer))]
  const options = shuffle([correctAnswer, ...shuffle(distractorTokens).slice(0, 3)])

  return {
    id: item.id,
    srsKey: item.srsKey,
    prompt: `${item.sentence.before}___${item.sentence.after}`,
    promptHint: 'Выбери подходящую частицу/окончание',
    correctAnswer,
    options,
    explanation: `${item.sentence.before}${correctAnswer}${item.sentence.after} — «${item.sentence.translation}»`,
  }
}

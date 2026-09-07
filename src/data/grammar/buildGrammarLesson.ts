import { pickRandom, shuffle } from '@/utils/shuffle'
import type { GrammarPoint, LessonDefinition, MiniCheckQuestion, TheorySection } from '@/types/content'

/** Собирает урок по одной грамматической конструкции из данных GrammarPoint — так лекция и упражнения не расходятся. */
export function buildGrammarLesson(point: GrammarPoint, allPoints: GrammarPoint[], blockId: string, order: number): LessonDefinition {
  const theory: TheorySection[] = [
    { type: 'heading', text: point.title },
    { type: 'paragraph', text: point.explanation },
    { type: 'note', text: `Формула: ${point.formula}` },
    { type: 'paragraph', text: point.usage },
    ...point.examples.map((example): TheorySection => ({
      type: 'example',
      japanese: example.japanese,
      romaji: example.romaji,
      translation: example.translation,
    })),
    ...(point.commonMistakes ?? []).map((text): TheorySection => ({ type: 'warning', text })),
    ...(point.comparisons ?? []).map((text): TheorySection => ({ type: 'note', text })),
  ]

  return {
    id: `${blockId}-${point.id}`,
    blockId,
    title: point.title,
    description: point.formula,
    order,
    theory,
    miniCheck: buildMiniCheck(point, allPoints, blockId),
    itemIds: [point.id],
    xpReward: 50,
  }
}

function buildMiniCheck(point: GrammarPoint, allPoints: GrammarPoint[], blockId: string): MiniCheckQuestion[] {
  const distractorTokens = allPoints.filter((p) => p.id !== point.id).map((p) => p.answerToken)

  return point.drillSentences.map((sentence, index): MiniCheckQuestion => {
    const options = shuffle([point.answerToken, ...pickRandom(distractorTokens, Math.min(3, distractorTokens.length))])
    return {
      id: `${blockId}-${point.id}-check-${index}`,
      question: `Заполни пропуск: ${sentence.before}___${sentence.after}`,
      options,
      correctIndex: options.indexOf(point.answerToken),
      explanation: `${sentence.before}${point.answerToken}${sentence.after} — «${sentence.translation}»`,
    }
  })
}

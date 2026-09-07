import { buildMultipleChoiceOptions } from '@/services/practiceEngine'
import type { KanjiEntry } from '@/types/content'
import type { Question } from '@/types/practice'

export type KanjiQuestionDirection = 'char-to-meaning' | 'meaning-to-char'

export function kanjiSrsKey(entry: KanjiEntry): string {
  return `kanji:${entry.id}`
}

export function generateKanjiQuestion(entry: KanjiEntry, pool: KanjiEntry[], direction: KanjiQuestionDirection): Question {
  const isCharToMeaning = direction === 'char-to-meaning'

  const prompt = isCharToMeaning ? entry.char : entry.meaning
  const correctAnswer = isCharToMeaning ? entry.meaning : entry.char
  const getAnswerText = (item: KanjiEntry) => (isCharToMeaning ? item.meaning : item.char)

  return {
    id: `${entry.id}-${direction}`,
    srsKey: kanjiSrsKey(entry),
    prompt,
    promptHint: isCharToMeaning ? undefined : 'Выбери подходящий кандзи',
    correctAnswer,
    options: buildMultipleChoiceOptions(correctAnswer, pool, getAnswerText),
    explanation: `${entry.char} — «${entry.meaning}». Например: ${entry.relatedWords[0]?.japanese} (${entry.relatedWords[0]?.translation}).`,
  }
}

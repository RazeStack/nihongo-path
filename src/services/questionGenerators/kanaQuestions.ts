import { buildMultipleChoiceOptions } from '@/services/practiceEngine'
import type { KanaChar } from '@/types/content'
import type { Question } from '@/types/practice'

export type KanaQuestionDirection = 'char-to-romaji' | 'romaji-to-char'

export function kanaSrsKey(char: KanaChar): string {
  return `kana:${char.id}`
}

export function generateKanaQuestion(
  char: KanaChar,
  pool: KanaChar[],
  direction: KanaQuestionDirection,
): Question {
  const isCharToRomaji = direction === 'char-to-romaji'

  const prompt = isCharToRomaji ? char.char : char.romaji
  const correctAnswer = isCharToRomaji ? char.romaji : char.char
  const getAnswerText = (item: KanaChar) => (isCharToRomaji ? item.romaji : item.char)

  return {
    id: `${char.id}-${direction}`,
    srsKey: kanaSrsKey(char),
    prompt,
    promptHint: isCharToRomaji ? undefined : 'Выбери нужный символ',
    correctAnswer,
    options: buildMultipleChoiceOptions(correctAnswer, pool, getAnswerText),
    explanation: `${char.char} (${char.romaji}) — например, ${char.example.japanese} «${char.example.translation}»`,
  }
}

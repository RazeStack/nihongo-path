import { buildMultipleChoiceOptions } from '@/services/practiceEngine'
import type { VocabWord } from '@/types/content'
import type { Question } from '@/types/practice'

export type VocabQuestionDirection = 'word-to-translation' | 'translation-to-word'

export function vocabSrsKey(word: VocabWord): string {
  return `vocab:${word.id}`
}

export function generateVocabQuestion(word: VocabWord, pool: VocabWord[], direction: VocabQuestionDirection): Question {
  const isWordToTranslation = direction === 'word-to-translation'

  const prompt = isWordToTranslation ? word.japanese : word.translation
  const correctAnswer = isWordToTranslation ? word.translation : word.japanese
  const getAnswerText = (item: VocabWord) => (isWordToTranslation ? item.translation : item.japanese)

  return {
    id: `${word.id}-${direction}`,
    srsKey: vocabSrsKey(word),
    prompt,
    promptHint: isWordToTranslation ? word.kana : 'Выбери японское слово',
    correctAnswer,
    options: buildMultipleChoiceOptions(correctAnswer, pool, getAnswerText),
    explanation: `${word.japanese} (${word.kana}, ${word.romaji}) — «${word.translation}». Пример: ${word.example.japanese} — ${word.example.translation}`,
  }
}

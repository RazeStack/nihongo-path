/**
 * Типы для универсального движка практики (services/practiceEngine.ts).
 * Он не знает, тренируем мы кану, слова или кандзи — только вопросы
 * и ключи SRS. Это позволяет добавить Vocabulary/Kanji-практику позже,
 * просто написав новый generateQuestion, без изменения самого движка.
 */

export type PracticeMode = 'sequential' | 'random' | 'mistakes' | 'review' | 'exam'

export interface Question {
  id: string
  /** Ключ для SRS/статистики ошибок, например "kana:h-a". */
  srsKey: string
  prompt: string
  promptHint?: string
  correctAnswer: string
  options: string[]
  explanation?: string
}

export interface AnsweredQuestion {
  question: Question
  selectedAnswer: string
  isCorrect: boolean
}

export interface PracticeResult {
  answered: AnsweredQuestion[]
  correctCount: number
  totalCount: number
  scorePercent: number
  durationSeconds: number
}

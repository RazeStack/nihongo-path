import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import type { Question } from '@/types/practice'

interface QuestionCardProps {
  question: Question
  selectedAnswer: string | null
  onAnswer: (answer: string) => void
  onNext: () => void
  isLast: boolean
}

export function QuestionCard({ question, selectedAnswer, onAnswer, onNext, isLast }: QuestionCardProps) {
  const isAnswered = selectedAnswer !== null
  // Одиночный символ каны показываем крупно; предложение с пропуском (грамматика) — мельче, чтобы помещалось.
  const promptSizeClass = question.prompt.length > 6 ? 'text-3xl' : 'text-6xl'

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center gap-8 rounded-2xl border border-border bg-surface p-8 text-center"
    >
      {question.promptHint && <p className="text-sm text-text-muted">{question.promptHint}</p>}
      <p className={`font-jp ${promptSizeClass} font-medium text-text`}>{question.prompt}</p>

      <div className="grid w-full max-w-md grid-cols-2 gap-3">
        {question.options.map((option) => {
          const isCorrectOption = option === question.correctAnswer
          const isSelected = option === selectedAnswer

          let stateClasses = 'border-border bg-surface hover:border-accent hover:bg-accent-soft'
          if (isAnswered && isCorrectOption) stateClasses = 'border-success bg-success-soft text-success'
          else if (isAnswered && isSelected) stateClasses = 'border-danger bg-danger-soft text-danger'
          else if (isAnswered) stateClasses = 'border-border opacity-50'

          return (
            <button
              key={option}
              disabled={isAnswered}
              onClick={() => onAnswer(option)}
              className={`flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 font-jp text-xl font-medium transition-colors disabled:cursor-default ${stateClasses}`}
            >
              {isAnswered && isCorrectOption && <Check size={18} />}
              {isAnswered && isSelected && !isCorrectOption && <X size={18} />}
              {option}
            </button>
          )
        })}
      </div>

      {isAnswered && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex w-full flex-col items-center gap-4">
          {question.explanation && <p className="text-sm text-text-muted">{question.explanation}</p>}
          <Button onClick={onNext}>{isLast ? 'Завершить' : 'Далее'}</Button>
        </motion.div>
      )}
    </motion.div>
  )
}

import { useState } from 'react'
import { Check, X } from 'lucide-react'
import type { MiniCheckQuestion } from '@/types/content'

export function MiniCheck({ questions }: { questions: MiniCheckQuestion[] }) {
  const [answers, setAnswers] = useState<Record<string, number>>({})

  if (questions.length === 0) return null

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface-2 p-5">
      <h3 className="font-semibold text-text">Мини-проверка</h3>
      {questions.map((question) => {
        const selected = answers[question.id]
        return (
          <div key={question.id} className="flex flex-col gap-2">
            <p className="text-sm font-medium text-text">{question.question}</p>
            <div className="flex flex-wrap gap-2">
              {question.options.map((option, index) => {
                const isSelected = selected === index
                const isCorrect = index === question.correctIndex
                let classes = 'border-border bg-surface hover:border-accent'
                if (selected !== undefined && isCorrect) classes = 'border-success bg-success-soft text-success'
                else if (selected !== undefined && isSelected) classes = 'border-danger bg-danger-soft text-danger'

                return (
                  <button
                    key={option}
                    disabled={selected !== undefined}
                    onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: index }))}
                    className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors disabled:cursor-default ${classes}`}
                  >
                    {selected !== undefined && isCorrect && <Check size={14} />}
                    {selected !== undefined && isSelected && !isCorrect && <X size={14} />}
                    {option}
                  </button>
                )
              })}
            </div>
            {selected !== undefined && question.explanation && (
              <p className="text-xs text-text-muted">{question.explanation}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}

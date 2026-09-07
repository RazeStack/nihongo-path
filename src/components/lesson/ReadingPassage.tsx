import { useState } from 'react'
import type { ReadingSegment } from '@/types/content'

export function ReadingPassage({ segments, translation }: { segments: ReadingSegment[]; translation: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-2xl border border-border bg-surface p-6">
        <p className="font-jp text-2xl leading-loose whitespace-pre-wrap text-text">
          {segments.map((segment, index) => {
            const isGlossed = Boolean(segment.reading || segment.meaning)
            if (!isGlossed) return <span key={index}>{segment.text}</span>
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`rounded px-0.5 underline decoration-dotted underline-offset-4 transition-colors ${
                  activeIndex === index ? 'bg-accent-soft text-accent' : 'hover:bg-accent-soft hover:text-accent'
                }`}
              >
                {segment.text}
              </button>
            )
          })}
        </p>
      </div>

      {activeIndex !== null && segments[activeIndex] && (
        <div className="rounded-xl bg-accent-soft p-3 text-sm text-accent">
          <span className="font-jp font-semibold">{segments[activeIndex].text}</span>
          {segments[activeIndex].reading && <span> — {segments[activeIndex].reading}</span>}
          {segments[activeIndex].meaning && <span> — «{segments[activeIndex].meaning}»</span>}
        </div>
      )}

      <p className="text-sm text-text-muted">{translation}</p>
    </div>
  )
}

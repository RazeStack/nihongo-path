import { AlertTriangle, Info } from 'lucide-react'
import type { TheorySection } from '@/types/content'

export function TheoryRenderer({ sections }: { sections: TheorySection[] }) {
  return (
    <div className="flex flex-col gap-4">
      {sections.map((section, index) => (
        <TheorySectionBlock key={index} section={section} />
      ))}
    </div>
  )
}

function TheorySectionBlock({ section }: { section: TheorySection }) {
  switch (section.type) {
    case 'heading':
      return <h2 className="mt-2 text-xl font-semibold text-text">{section.text}</h2>

    case 'paragraph':
      return <p className="leading-relaxed text-text-muted">{section.text}</p>

    case 'list':
      return (
        <ul className="list-disc space-y-1 pl-5 text-text-muted">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )

    case 'table':
      return (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-2 text-text-muted">
              <tr>
                {section.headers.map((header, i) => (
                  <th key={i} className="px-4 py-2 font-medium">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i} className="border-t border-border">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-2 ${j === 0 ? 'font-jp text-lg' : ''}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'example':
      return (
        <div className="rounded-xl bg-surface-2 p-4">
          <p className="font-jp text-lg text-text">{section.japanese}</p>
          {section.romaji && <p className="text-sm text-text-muted">{section.romaji}</p>}
          <p className="mt-1 text-sm text-text">{section.translation}</p>
          {section.note && <p className="mt-1 text-xs text-text-muted">{section.note}</p>}
        </div>
      )

    case 'note':
      return (
        <div className="flex gap-2 rounded-xl bg-accent-soft p-3 text-sm text-accent">
          <Info size={16} className="mt-0.5 shrink-0" />
          <span>{section.text}</span>
        </div>
      )

    case 'warning':
      return (
        <div className="flex gap-2 rounded-xl bg-warning-soft p-3 text-sm text-warning">
          <AlertTriangle size={16} className="mt-0.5 shrink-0" />
          <span>{section.text}</span>
        </div>
      )

    default:
      return null
  }
}

import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import type { BlockDefinition, LevelDefinition } from '@/types/content'

export function ContinueCard({ level, block }: { level: LevelDefinition; block: BlockDefinition }) {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-2xl bg-accent-solid p-6 text-white sm:flex-row sm:items-center">
      <div>
        <p className="text-sm text-white/70">{level.title} · {block.title}</p>
        <h2 className="mt-1 text-xl font-semibold">Продолжить обучение</h2>
      </div>
      <Link to={`/course/${level.id}/${block.id}`}>
        <Button className="!bg-white !text-accent-solid hover:!bg-white/90">
          Продолжить <ArrowRight size={16} />
        </Button>
      </Link>
    </div>
  )
}

import { Lock } from 'lucide-react'
import { BlockCard } from '@/components/course/BlockCard'
import { LEVELS } from '@/data/course/levels'
import {
  findNextRecommendedBlock,
  getBlockLockReason,
  getBlockStatus,
  isLevelUnlocked,
} from '@/services/progressService'
import { useProgressStore } from '@/store/useProgressStore'

export function CoursePage() {
  const progress = useProgressStore((state) => state.progress)
  const nextRecommended = findNextRecommendedBlock(LEVELS, progress)

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-2xl font-semibold text-text">Карта курса</h1>
        <p className="mt-1 text-text-muted">N5 → N4 → N3 → N2. Следующий уровень открывается только после экзаменов текущего.</p>
      </div>

      {LEVELS.map((level) => {
        const levelUnlocked = isLevelUnlocked(level, progress, LEVELS)

        return (
          <section key={level.id} className={levelUnlocked ? '' : 'opacity-60'}>
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-xl font-semibold text-text">{level.title}</h2>
              {!levelUnlocked && <Lock size={16} className="text-text-muted" />}
              <span className="text-sm text-text-muted">{level.description}</span>
            </div>

            {level.blocks.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[...level.blocks]
                  .sort((a, b) => a.order - b.order)
                  .map((block) => {
                    const status = getBlockStatus(block, level, progress, levelUnlocked)
                    return (
                      <BlockCard
                        key={block.id}
                        block={block}
                        status={status}
                        isCurrent={nextRecommended?.block.id === block.id}
                        lockReason={status === 'locked' ? getBlockLockReason(block, level, levelUnlocked) : undefined}
                      />
                    )
                  })}
              </div>
            ) : null}

            {level.plannedBlocks && level.plannedBlocks.length > 0 && (
              <div className="mt-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-text-muted">В разработке</p>
                <div className="flex flex-wrap gap-2">
                  {level.plannedBlocks.map((planned) => (
                    <span
                      key={planned.title}
                      title={planned.description}
                      className="rounded-full border border-dashed border-border px-3 py-1.5 text-xs text-text-muted"
                    >
                      {planned.title}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}

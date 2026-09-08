import { useRef, useState, type ChangeEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { ACHIEVEMENTS } from '@/data/achievements'
import { LEVELS } from '@/data/course/levels'
import { isLevelCompleted, isLevelUnlocked, isValidProgressShape } from '@/services/progressService'
import { calculateProfileLevel } from '@/services/xp'
import { useProgressStore } from '@/store/useProgressStore'
import { useSettingsStore } from '@/store/useSettingsStore'
import type { UserProgress } from '@/types/progress'

export function ProfilePage() {
  const progress = useProgressStore((state) => state.progress)
  const resetProgress = useProgressStore((state) => state.resetProgress)
  const importProgress = useProgressStore((state) => state.importProgress)
  const theme = useSettingsStore((state) => state.theme)
  const setTheme = useSettingsStore((state) => state.setTheme)
  const [confirmingReset, setConfirmingReset] = useState(false)
  const [pendingImport, setPendingImport] = useState<UserProgress | null>(null)
  const [importError, setImportError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleExport() {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `nihongo-path-progress-${new Date().toISOString().slice(0, 10)}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result))
        if (!isValidProgressShape(parsed)) {
          setImportError('Файл не похож на резервную копию прогресса Nihongo Path.')
          return
        }
        setImportError(null)
        setPendingImport(parsed)
      } catch {
        setImportError('Не удалось прочитать файл — он повреждён или это не JSON.')
      }
    }
    reader.readAsText(file)

    event.target.value = ''
  }

  function handleConfirmImport() {
    if (!pendingImport) return
    importProgress(pendingImport)
    setPendingImport(null)
  }

  const levelInfo = calculateProfileLevel(progress.xp)
  const unlockedAchievements = ACHIEVEMENTS.filter((a) => progress.unlockedAchievements[a.id]).length
  const currentJlptLevel = [...LEVELS].reverse().find((level) => isLevelUnlocked(level, progress, LEVELS))

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <h1 className="text-2xl font-semibold text-text">Профиль</h1>

      <Card className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-2xl font-bold text-accent">
          {levelInfo.level}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-text">{levelInfo.title}</p>
          <p className="text-sm text-text-muted">{progress.xp} XP всего</p>
          {levelInfo.xpForNextLevel !== null && <ProgressBar percent={levelInfo.progressPercent} className="mt-2" />}
        </div>
      </Card>

      <Card className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat label="Уровень JLPT" value={currentJlptLevel?.title.toUpperCase() ?? '—'} />
        <Stat label="Серия дней" value={progress.streak.current} />
        <Stat label="Лучшая серия" value={progress.streak.longest} />
        <Stat label="Достижения" value={`${unlockedAchievements}/${ACHIEVEMENTS.length}`} />
      </Card>

      <Card>
        <h2 className="mb-3 font-semibold text-text">Прогресс по уровням JLPT</h2>
        <div className="flex flex-col gap-2 text-sm">
          {LEVELS.map((level) => (
            <div key={level.id} className="flex items-center justify-between">
              <span className="text-text">{level.title}</span>
              <span className="text-text-muted">{isLevelCompleted(level, progress) ? 'Пройден' : isLevelUnlocked(level, progress, LEVELS) ? 'В процессе' : 'Заблокирован'}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="mb-3 font-semibold text-text">Настройки</h2>
        <div className="flex items-center justify-between">
          <span className="text-sm text-text">Тема оформления</span>
          <div className="flex gap-2">
            <Button variant={theme === 'light' ? 'primary' : 'secondary'} onClick={() => setTheme('light')}>
              Светлая
            </Button>
            <Button variant={theme === 'dark' ? 'primary' : 'secondary'} onClick={() => setTheme('dark')}>
              Тёмная
            </Button>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="mb-2 font-semibold text-text">Резервная копия</h2>
        <p className="mb-3 text-sm text-text-muted">
          Прогресс хранится только в этом браузере на этом устройстве. Скачай файл, чтобы перенести его на другое устройство или
          подстраховаться перед очисткой браузера.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={handleExport}>
            Скачать резервную копию
          </Button>
          <Button variant="secondary" onClick={() => fileInputRef.current?.click()}>
            Загрузить резервную копию
          </Button>
          <input ref={fileInputRef} type="file" accept="application/json,.json" className="hidden" onChange={handleFileSelected} />
        </div>
        {importError && <p className="mt-3 text-sm text-danger">{importError}</p>}
        {pendingImport && (
          <div className="mt-3 rounded-xl bg-surface-2 p-3">
            <p className="mb-3 text-sm text-text">
              Заменить текущий прогресс данными из файла? В нём {pendingImport.xp} XP, создан {pendingImport.createdAt}. Текущий
              прогресс на этом устройстве будет потерян без возможности восстановления.
            </p>
            <div className="flex gap-2">
              <Button variant="danger" onClick={handleConfirmImport}>
                Да, заменить
              </Button>
              <Button variant="secondary" onClick={() => setPendingImport(null)}>
                Отмена
              </Button>
            </div>
          </div>
        )}
      </Card>

      <Card className="border-danger/30">
        <h2 className="mb-2 font-semibold text-text">Сбросить прогресс</h2>
        <p className="mb-3 text-sm text-text-muted">Удалит весь прогресс, XP, достижения и статистику без возможности восстановления.</p>
        {confirmingReset ? (
          <div className="flex gap-2">
            <Button variant="danger" onClick={resetProgress}>
              Да, сбросить всё
            </Button>
            <Button variant="secondary" onClick={() => setConfirmingReset(false)}>
              Отмена
            </Button>
          </div>
        ) : (
          <Button variant="danger" onClick={() => setConfirmingReset(true)}>
            Сбросить прогресс
          </Button>
        )}
      </Card>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <p className="text-lg font-semibold text-text">{value}</p>
      <p className="text-xs text-text-muted">{label}</p>
    </div>
  )
}

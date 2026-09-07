import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useToastStore } from '@/store/useToastStore'

const ICON: Record<string, string> = { xp: '⚡', achievement: '🏆', levelup: '🚀' }
const AUTO_DISMISS_MS = 4000

export function ToastContainer() {
  const toasts = useToastStore((state) => state.toasts)
  const dismiss = useToastStore((state) => state.dismiss)

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} id={toast.id} type={toast.type} title={toast.title} description={toast.description} onDismiss={dismiss} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function ToastItem({
  id,
  type,
  title,
  description,
  onDismiss,
}: {
  id: string
  type: string
  title: string
  description?: string
  onDismiss: (id: string) => void
}) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(id), AUTO_DISMISS_MS)
    return () => clearTimeout(timer)
  }, [id, onDismiss])

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 40 }}
      className="pointer-events-auto flex min-w-64 max-w-80 items-center gap-3 rounded-xl border border-border bg-surface p-3 shadow-lg"
    >
      <span className="text-2xl">{ICON[type]}</span>
      <div>
        <p className="text-sm font-semibold text-text">{title}</p>
        {description && <p className="text-xs text-text-muted">{description}</p>}
      </div>
    </motion.div>
  )
}

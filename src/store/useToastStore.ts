import { create } from 'zustand'

export interface Toast {
  id: string
  type: 'xp' | 'achievement' | 'levelup'
  title: string
  description?: string
}

interface ToastStore {
  toasts: Toast[]
  push: (toast: Omit<Toast, 'id'>) => void
  dismiss: (id: string) => void
}

/**
 * Всплывающие уведомления об XP/достижениях/повышении уровня — не часть
 * учебных данных, поэтому живут в отдельном сторе, а не в useProgressStore.
 */
export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  push(toast) {
    const id = crypto.randomUUID()
    set((state) => ({ toasts: [...state.toasts, { ...toast, id }] }))
  },
  dismiss(id) {
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }))
  },
}))

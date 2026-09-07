import { create } from 'zustand'
import { storage } from '@/services/storage'

export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'nihongo-path.settings.v1'

interface Settings {
  theme: ThemeMode
}

function loadSettings(): Settings {
  const saved = storage.load<Settings>(STORAGE_KEY)
  if (saved) return saved
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
  return { theme: prefersDark ? 'dark' : 'light' }
}

interface SettingsStore extends Settings {
  toggleTheme: () => void
  setTheme: (theme: ThemeMode) => void
}

export const useSettingsStore = create<SettingsStore>((set, get) => ({
  ...loadSettings(),
  toggleTheme() {
    const next: ThemeMode = get().theme === 'dark' ? 'light' : 'dark'
    storage.save(STORAGE_KEY, { theme: next })
    set({ theme: next })
  },
  setTheme(theme) {
    storage.save(STORAGE_KEY, { theme })
    set({ theme })
  },
}))

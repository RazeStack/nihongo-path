import { useEffect } from 'react'
import { useSettingsStore } from '@/store/useSettingsStore'

/** Синхронизирует класс .dark на <html> с настройками темы. */
export function useTheme() {
  const theme = useSettingsStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])
}

import type { StorageService } from './StorageService'

export const localStorageAdapter: StorageService = {
  load<T>(key: string): T | null {
    try {
      const raw = window.localStorage.getItem(key)
      return raw ? (JSON.parse(raw) as T) : null
    } catch {
      return null
    }
  },
  save<T>(key: string, value: T): void {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // localStorage может быть недоступен (приватный режим, квота) — тихо игнорируем.
    }
  },
  remove(key: string): void {
    try {
      window.localStorage.removeItem(key)
    } catch {
      // см. выше
    }
  },
}

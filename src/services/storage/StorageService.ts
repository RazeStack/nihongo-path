/**
 * Абстракция хранилища. Сегодня это localStorage, завтра — запрос к
 * backend/базе данных. Остальной код зависит только от этого интерфейса,
 * поэтому замена реализации не требует правок в store или сервисах.
 */
export interface StorageService {
  load<T>(key: string): T | null
  save<T>(key: string, value: T): void
  remove(key: string): void
}

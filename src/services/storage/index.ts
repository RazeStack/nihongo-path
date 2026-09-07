import { localStorageAdapter } from './localStorageAdapter'
import type { StorageService } from './StorageService'

/**
 * Единая точка доступа к хранилищу. Чтобы перейти на backend,
 * замените эту реализацию на адаптер, который делает fetch к API —
 * store и сервисы менять не придётся.
 */
export const storage: StorageService = localStorageAdapter

export type { StorageService }

/** Сегодняшняя дата в формате YYYY-MM-DD, в локальном часовом поясе пользователя. */
export function todayDateString(): string {
  const now = new Date()
  const offsetMs = now.getTimezoneOffset() * 60_000
  return new Date(now.getTime() - offsetMs).toISOString().slice(0, 10)
}

export function addDaysToDateString(dateString: string, days: number): string {
  const date = new Date(dateString + 'T00:00:00')
  date.setDate(date.getDate() + days)
  return date.toISOString().slice(0, 10)
}

export function daysBetween(a: string, b: string): number {
  const msPerDay = 86_400_000
  const dateA = new Date(a + 'T00:00:00').getTime()
  const dateB = new Date(b + 'T00:00:00').getTime()
  return Math.round((dateB - dateA) / msPerDay)
}

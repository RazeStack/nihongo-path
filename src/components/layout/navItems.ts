import { BarChart3, Home, LayoutGrid, Trophy, User, Dumbbell } from 'lucide-react'

export const NAV_ITEMS = [
  { to: '/', label: 'Дашборд', icon: Home, end: true },
  { to: '/course', label: 'Курс', icon: LayoutGrid },
  { to: '/practice', label: 'Практика', icon: Dumbbell },
  { to: '/statistics', label: 'Статистика', icon: BarChart3 },
  { to: '/achievements', label: 'Достижения', icon: Trophy },
  { to: '/profile', label: 'Профиль', icon: User },
]

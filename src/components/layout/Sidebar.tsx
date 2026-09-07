import { Moon, Sun } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useSettingsStore } from '@/store/useSettingsStore'
import { NAV_ITEMS } from './navItems'

export function Sidebar() {
  const theme = useSettingsStore((state) => state.theme)
  const toggleTheme = useSettingsStore((state) => state.toggleTheme)

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-surface px-4 py-6 md:flex">
      <div className="mb-8 flex items-center gap-2 px-2">
        <span className="font-jp text-xl font-bold text-accent">道</span>
        <span className="text-lg font-semibold text-text">Nihongo Path</span>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive ? 'bg-accent-soft text-accent' : 'text-text-muted hover:bg-surface-2 hover:text-text'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={toggleTheme}
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-surface-2 hover:text-text"
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        {theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
      </button>
    </aside>
  )
}

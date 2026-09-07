import { Outlet } from 'react-router-dom'
import { ToastContainer } from '@/components/gamification/ToastContainer'
import { useTheme } from '@/hooks/useTheme'
import { MobileNav } from './MobileNav'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

export function AppLayout() {
  useTheme()

  return (
    <div className="flex min-h-screen bg-bg text-text">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="flex-1 overflow-x-hidden px-4 py-6 pb-20 md:px-8 md:pb-6">
          <div className="mx-auto w-full max-w-5xl">
            <Outlet />
          </div>
        </main>
      </div>
      <MobileNav />
      <ToastContainer />
    </div>
  )
}

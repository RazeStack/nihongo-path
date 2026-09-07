import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center gap-4 py-24 text-center">
      <p className="font-jp text-6xl text-text-muted">迷</p>
      <h1 className="text-xl font-semibold text-text">Страница не найдена</h1>
      <Link to="/">
        <Button>На дашборд</Button>
      </Link>
    </div>
  )
}

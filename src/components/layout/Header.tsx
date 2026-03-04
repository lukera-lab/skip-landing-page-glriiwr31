import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <img
            src="https://img.usecurling.com/i?q=colorful%203d%20cube&shape=fill"
            alt="Skip Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-slate-900">Skip</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            to="/"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors hidden sm:block"
          >
            Soluções
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors hidden sm:block"
          >
            Preços
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            Suporte
          </Link>
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Entrar
          </Button>
        </nav>
      </div>
    </header>
  )
}

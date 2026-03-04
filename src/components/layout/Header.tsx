import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <svg
            width="32"
            height="32"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 drop-shadow-sm"
          >
            <rect width="48" height="48" rx="12" fill="url(#skip-logo-gradient-header)" />
            <path d="M13 32L25 24L13 16V32Z" fill="white" />
            <path d="M23 32L35 24L23 16V32Z" fill="white" fillOpacity="0.8" />
            <defs>
              <linearGradient
                id="skip-logo-gradient-header"
                x1="0"
                y1="0"
                x2="48"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
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

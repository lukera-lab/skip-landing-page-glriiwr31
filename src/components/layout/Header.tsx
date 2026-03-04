import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import logoUrl from '@/assets/logo-skip-black-85aeb.svg'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-skip-neutral-1350 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <img src={logoUrl} alt="Skip Logo" className="h-8 w-auto drop-shadow-sm" />
          <span className="font-heading font-semibold text-body-l tracking-tight text-skip-neutral-100">Skip</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            to="/"
            className="font-body text-body-s text-skip-neutral-800 hover:text-skip-neutral-400 transition-colors hidden sm:block"
          >
            Soluções
          </Link>
          <Link
            to="/"
            className="font-body text-body-s text-skip-neutral-800 hover:text-skip-neutral-400 transition-colors hidden sm:block"
          >
            Preços
          </Link>
          <Link
            to="/"
            className="font-body text-body-s text-skip-neutral-800 hover:text-skip-neutral-400 transition-colors"
          >
            Suporte
          </Link>
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex font-heading font-medium text-skip-neutral-600 hover:text-skip-neutral-200">
            Entrar
          </Button>
        </nav>
      </div>
    </header>
  )
}

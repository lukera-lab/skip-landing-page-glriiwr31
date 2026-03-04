import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t py-8 bg-slate-50 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-2">
          <img
            src="https://img.usecurling.com/i?q=colorful%203d%20cube&shape=fill&color=gray"
            alt="Skip"
            className="h-5 w-5 grayscale opacity-50"
          />
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Skip. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-900 transition-colors">
            Termos
          </Link>
          <Link to="/" className="hover:text-slate-900 transition-colors">
            Privacidade
          </Link>
          <Link to="/" className="hover:text-slate-900 transition-colors">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-skip-neutral-500 py-8 bg-skip-neutral-300 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
        <p className="font-body text-body-xs text-skip-neutral-1000">
          © {new Date().getFullYear()} Skip. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import logoUrl from '@/assets/logo-skip-black-85aeb.svg'

const LOGOS = [
  { name: 'microsoft', width: 'w-24' },
  { name: 'facebook', width: 'w-24' },
  { name: 'ambev', width: 'w-20' },
  { name: 'ifood', width: 'w-16' },
  { name: 'brasil paralelo', width: 'w-32' },
]

export default function Index() {
  return (
    <div className="flex-1 flex flex-col items-center pt-20 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[900px] w-full flex flex-col items-center text-center mx-auto relative z-10">
        {/* Decorative Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-100/40 rounded-full blur-[100px] -z-10 pointer-events-none" />

        {/* Logo Icon */}
        <div className="flex items-center justify-center mb-8 animate-fade-in-down">
          <img src={logoUrl} alt="Skip Logo" className="h-12 w-auto drop-shadow-sm" />
        </div>

        {/* Main Headline */}
        <h1
          className="font-heading font-medium text-heading-xxxl sm:text-heading-display tracking-tight text-skip-neutral-100 mb-6 animate-fade-in-up"
          style={{ animationFillMode: 'both' }}
        >
          O criador de Sistemas Internos <br className="hidden md:block" />
          mais{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-violet-600 to-fuchsia-600">
            fácil e intuitivo
          </span>{' '}
          do mundo
        </h1>

        {/* Subheadline */}
        <p
          className="font-body text-body-xl text-skip-neutral-800 mb-6 max-w-[700px] mx-auto animate-fade-in-up leading-relaxed"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          Mande suas ideias para o Skip. Receba Sistemas Internos perfeitos para melhorar a
          eficiência dos processos da sua empresa
        </p>

        {/* Disclaimer */}
        <div
          className="mb-10 animate-fade-in-up"
          style={{ animationDelay: '200ms', animationFillMode: 'both' }}
        >
          <span className="font-mono text-mono-s tracking-[0.15em] text-blue-violet-600 uppercase">
            [Sem o custo de contratar desenvolvedores]
          </span>
        </div>

        {/* Call to Actions */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in-up"
          style={{ animationDelay: '300ms', animationFillMode: 'both' }}
        >
          <div className="relative group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-brand rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500" />
            <Button className="relative w-full sm:w-auto h-14 px-8 rounded-full bg-blue-violet-600 hover:bg-blue-violet-700 text-white font-heading font-medium text-body-m shadow-elevation transition-all duration-300 group-hover:-translate-y-0.5 border-0">
              Explorar Soluções{' '}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <Button
            variant="outline"
            className="w-full sm:w-auto h-14 px-8 rounded-full font-heading font-medium text-body-m bg-skip-neutral-1450 hover:bg-skip-neutral-1400 border-skip-neutral-1350 text-skip-neutral-500 transition-all duration-300"
          >
            Agendar Demonstração <ArrowRight className="ml-2 w-4 h-4 text-skip-neutral-900" />
          </Button>
        </div>

        {/* Social Proof */}
        <div
          className="mt-28 w-full animate-fade-in"
          style={{ animationDelay: '500ms', animationFillMode: 'both' }}
        >
          <div className="flex items-center justify-center gap-2 mb-8 text-center px-4">
            <Sparkles className="w-4 h-4 text-blue-violet-500 shrink-0" />
            <p className="font-body text-body-xs text-skip-neutral-900">
              Skip é uma solução da Adapta, maior empresa de IA do Brasil, confiada por empresas
              como:
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={`https://img.usecurling.com/i?q=${encodeURIComponent(logo.name)}%20logo&color=solid-black`}
                alt={`${logo.name} logo`}
                className={`h-6 md:h-8 object-contain transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105 cursor-default ${logo.width}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

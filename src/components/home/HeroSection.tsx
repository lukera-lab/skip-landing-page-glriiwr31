import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import logoUrl from '@/assets/logo-skip-black-85aeb.svg'
import heroBgUrl from '@/assets/bg-hero-skip-8319b.webp'

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center py-32 w-full h-[600px] md:h-[800px]">
      {/* Background wrapper with fade-out mask */}
      <div className="absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,white_80%,transparent_100%)] pointer-events-none overflow-hidden">
        {/* Hero Background Image */}
        <img
          src={heroBgUrl}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-top"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-[1100px] w-full flex flex-col items-center text-center mx-auto px-5 relative z-10">
        {/* Logo Icon */}
        <div className="flex items-center justify-center mb-6 animate-fade-in-down">
          <img src={logoUrl} alt="Skip Logo" className="h-10 sm:h-12 w-auto drop-shadow-sm" />
        </div>

        {/* Main Headline */}
        <h2
          className="font-display text-[28px] leading-[1.1em] sm:text-5xl lg:text-[64px] sm:leading-[1.1] font-semibold tracking-tight text-skip-neutral-0 animate-fade-in-up w-full sm:max-w-none mx-auto"
          style={{ animationFillMode: 'both' }}
        >
          O criador de Sistemas Internos <br className="hidden md:block" />
          mais{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-violet-600 to-fuchsia-600">
            fácil e intuitivo
          </span>{' '}
          do mundo
        </h2>

        {/* Subheadline */}
        <p
          className="font-body text-base sm:text-lg lg:text-xl text-skip-neutral-800 max-w-[640px] mx-auto animate-fade-in-up leading-[1.3] mt-4"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          Mande suas ideias para o Skip. Receba Sistemas Internos perfeitos para melhorar a
          eficiência dos processos da sua empresa
        </p>

        {/* Disclaimer */}
        <div
          className="mb-10 mt-0 animate-fade-in-up"
          style={{ animationDelay: '200ms', animationFillMode: 'both' }}
        >
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.15em] text-blue-violet-600 uppercase font-semibold">
            [Sem o custo de contratar desenvolvedores]
          </span>
        </div>

        {/* Call to Actions */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in-up"
          style={{ animationDelay: '300ms', animationFillMode: 'both' }}
        >
          <div className="relative group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-brand rounded-[90px] blur opacity-25 group-hover:opacity-40 transition duration-500" />
            <Button className="relative w-full sm:w-auto font-display font-medium text-sm sm:text-base text-white transition-all duration-300 group-hover:-translate-y-0.5">
              Explorar Soluções
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

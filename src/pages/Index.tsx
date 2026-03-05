import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import logoUrl from '@/assets/logo-skip-black-85aeb.svg'
import heroBgUrl from '@/assets/bg-hero-skip-8319b.webp'
import { DemonstrationTabs } from '@/components/home/DemonstrationTabs'
import { PlatformSection } from '@/components/home/PlatformSection'
import { FeaturesSection } from '@/components/home/FeaturesSection'
import { TemplatesSection } from '@/components/home/TemplatesSection'

const LOGOS = [
  { name: 'microsoft', width: 'w-24' },
  { name: 'facebook', width: 'w-24' },
  { name: 'ambev', width: 'w-20' },
  { name: 'ifood', width: 'w-16' },
  { name: 'brasil paralelo', width: 'w-32' },
]

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center pt-24 md:pt-32 pb-32 w-full h-[800px]">
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
          <div className="flex items-center justify-center mb-10 animate-fade-in-down">
            <img src={logoUrl} alt="Skip Logo" className="h-10 sm:h-12 w-auto drop-shadow-sm" />
          </div>

          {/* Main Headline */}
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.1] font-bold tracking-tight text-skip-neutral-0 animate-fade-in-up w-full"
            style={{ animationFillMode: 'both' }}
          >
            <span className="inline-block">O criador de Sistemas Internos</span>{' '}
            <br className="hidden md:block" />
            <span className="inline-block">
              mais{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-violet-600 to-fuchsia-600">
                fácil e intuitivo
              </span>{' '}
              do mundo
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="font-body text-base sm:text-lg lg:text-xl text-skip-neutral-800 max-w-[600px] mx-auto animate-fade-in-up leading-relaxed mt-4"
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
            <Button
              variant="outline"
              className="w-full sm:w-auto h-12 sm:h-auto py-4 px-8 rounded-[90px] font-display font-medium text-sm sm:text-base bg-white/80 hover:bg-white border-skip-neutral-1350 text-skip-neutral-500 transition-all duration-300 backdrop-blur-sm"
            >
              Agendar Demonstração <ArrowRight className="w-4 h-4 text-skip-neutral-900" />
            </Button>
          </div>
        </div>
      </section>

      {/* Logo Showcase Section */}
      <section className="w-full px-5 py-12 relative z-10">
        <div
          className="max-w-[1100px] mx-auto animate-fade-in"
          style={{ animationDelay: '500ms', animationFillMode: 'both' }}
        >
          <div className="flex items-center justify-center gap-2 mb-8 text-center">
            <Sparkles className="w-4 h-4 text-fuchsia-500 shrink-0" />
            <p className="font-body text-xs sm:text-sm text-skip-neutral-800">
              Skip é uma solução da Adapta, maior empresa de IA do Brasil, confiada por empresas
              como:
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={`https://img.usecurling.com/i?q=${encodeURIComponent(logo.name)}%20logo&color=solid-black`}
                alt={`${logo.name} logo`}
                className={`h-5 sm:h-6 md:h-8 object-contain transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105 cursor-default ${logo.width}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Demonstration Section */}
      <section className="w-full py-24 px-5 relative z-10 bg-skip-neutral-1550">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
          <span className="font-mono text-mono-xs tracking-[0.2em] text-blue-violet-600 uppercase font-semibold mb-6">
            DEMONSTRAÇÃO
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-semibold text-skip-neutral-100 mb-8 max-w-4xl leading-tight tracking-tight">
            Veja na prática como o Skip transforma seus processos
          </h2>
          <p className="font-body text-body-m text-skip-neutral-800 max-w-2xl">
            Escolha um processo abaixo e compare como era antes e como fica com o Skip
          </p>

          <DemonstrationTabs />
        </div>
      </section>

      {/* Platform Section */}
      <PlatformSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Templates Section */}
      <TemplatesSection />
    </div>
  )
}

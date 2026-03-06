import { Sparkles } from 'lucide-react'
import { HeroSection } from '@/components/home/HeroSection'
import { DemonstrationTabs } from '@/components/home/DemonstrationTabs'
import { PlatformSection } from '@/components/home/PlatformSection'
import { FeaturesSection } from '@/components/home/FeaturesSection'
import { TemplatesSection } from '@/components/home/TemplatesSection'
import { OfferSection } from '@/components/home/OfferSection'
import { GuaranteeSection } from '@/components/home/GuaranteeSection'

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
      <HeroSection />

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
      <section className="w-full py-12 md:py-24 px-5 relative z-10 bg-skip-neutral-1550">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
          <span className="font-mono text-mono-xs tracking-[0.2em] text-blue-violet-600 uppercase font-semibold mb-2 md:mb-3">
            DEMONSTRAÇÃO
          </span>
          <h2 className="font-heading text-[28px] leading-[1.1] md:text-[40px] font-semibold text-skip-neutral-100 mb-4 max-w-[42rem] tracking-[-0.02em]">
            Veja na prática como o Skip transforma seus processos
          </h2>
          <p className="font-body text-body-l text-skip-neutral-800 leading-[1.3]">
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

      {/* Offer Section */}
      <OfferSection />

      {/* Guarantee Section */}
      <GuaranteeSection />
    </div>
  )
}

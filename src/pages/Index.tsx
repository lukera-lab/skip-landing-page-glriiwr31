import { HeroSection } from '@/components/home/HeroSection'
import { HelloBar } from '@/components/home/HelloBar'
import { HowItWorksSection } from '@/components/home/HowItWorksSection'
import { DemonstrationTabs } from '@/components/home/DemonstrationTabs'
import { PlatformSection } from '@/components/home/PlatformSection'
import { FeaturesSection } from '@/components/home/FeaturesSection'
import { TemplatesSection } from '@/components/home/TemplatesSection'
import { OfferSection } from '@/components/home/OfferSection'
import { GuaranteeSection } from '@/components/home/GuaranteeSection'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <HelloBar text="Condição exclusiva de lançamento" />
      {/* Hero Section */}
      <HeroSection />

      {/* Adapta Divider */}
      <div className="w-full px-5 py-6 relative z-10">
        <div className="max-w-[1100px] mx-auto flex items-center gap-4">
          <div className="flex-1 h-px bg-skip-neutral-1350" />
          <p className="font-body text-xs text-skip-neutral-900 text-center shrink-0">
            Skip é uma solução da Adapta, maior empresa de IA do Brasil
          </p>
          <div className="flex-1 h-px bg-skip-neutral-1350" />
        </div>
      </div>

      {/* How it Works Section */}
      <HowItWorksSection />

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

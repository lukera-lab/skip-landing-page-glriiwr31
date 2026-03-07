import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import offerSkipUrl from '@/assets/offer-skip-85e8a.webp'
import { LeadCaptureModal } from './LeadCaptureModal'

export function OfferSection() {
  return (
    <section
      id="offer"
      className="w-full py-16 md:py-24 px-5 bg-skip-neutral-300 relative z-10 border-t border-skip-neutral-600/50"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
        {/* Label */}
        <span className="font-mono text-mono-xs tracking-[0.2em] text-blue-violet-500 uppercase font-semibold mb-3 block">
          Em Breve
        </span>

        {/* Headline */}
        <h2 className="font-heading text-[28px] md:text-[40px] leading-[1.1] font-semibold text-white tracking-[-0.02em] mb-4 max-w-[600px]">
          Tudo que você vai ter acesso
        </h2>

        {/* Subtitle */}
        <p className="font-body text-body-l text-skip-neutral-900 leading-[1.3] max-w-[520px] mb-10">
          O Skip está chegando com tudo. Entre na waitlist e seja o primeiro a saber quando lançar.
        </p>

        {/* Mockup */}
        <div className="w-full max-w-[820px] mx-auto mb-10">
          <img
            src={offerSkipUrl}
            alt="Skip — visão geral da plataforma"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* CTA */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-brand rounded-[90px] blur opacity-30 group-hover:opacity-50 transition duration-500" />
          <LeadCaptureModal>
            <Button className="relative font-display font-medium text-sm sm:text-base text-white transition-all duration-300 group-hover:-translate-y-0.5 px-8 py-3 h-auto">
              Entrar para a Waitlist
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </Button>
          </LeadCaptureModal>
        </div>
      </div>
    </section>
  )
}

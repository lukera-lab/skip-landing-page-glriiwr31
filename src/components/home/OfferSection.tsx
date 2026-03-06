import { Check, Gift, Shield, ArrowRight, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import consultoriaImgUrl from '@/assets/consultoria-individual-skip-f7cfb.webp'
import offerSkipUrl from '@/assets/offer-skip-85e8a.webp'
import { LeadCaptureModal } from './LeadCaptureModal'

export function OfferSection({ directCheckout = false }: { directCheckout?: boolean }) {
  const handleDirectCheckout = () => {
    window.location.href = 'https://go.adapta.org/checkout/skip-basic'
  }

  return (
    <section
      id="offer"
      className="w-full py-12 md:py-32 px-5 bg-white relative z-10 border-t border-skip-neutral-1350/50"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="mb-10 md:mb-12 flex flex-col items-center text-center">
          <span className="font-mono text-mono-xs tracking-[0.2em] text-blue-violet-600 uppercase font-semibold mb-2 md:mb-3 block">
            Lançamento
          </span>
          <h2 className="font-heading text-[28px] md:text-[40px] leading-[1.1] font-semibold text-skip-neutral-100 tracking-[-0.02em]">
            Oferta Exclusiva
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-8 md:gap-12 items-center">
          {/* Offer Card */}
          <div className="bg-white rounded-[20px] border border-skip-neutral-1350 shadow-elevation p-5 flex flex-col transition-all duration-300 hover:shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 w-fit mb-5">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </div>
              <span className="font-mono text-mono-xs tracking-[0.2em] text-red-500 uppercase font-semibold">
                Oferta da Live
              </span>
            </div>

            <h2 className="font-heading text-h4 font-semibold text-skip-neutral-300 mb-1">
              Skip Basic
            </h2>
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="font-heading text-[40px] leading-none font-bold text-skip-neutral-300">
                R$ 199
              </span>
              <span className="font-heading text-xl font-bold text-skip-neutral-300">/mês</span>
            </div>
            <p className="font-body text-body-xs text-skip-neutral-800 mb-5">cobrado anualmente</p>

            <ul className="flex flex-col gap-2 mb-5">
              <li className="font-body text-body-s text-skip-neutral-700">01 licença</li>
              <li className="font-body text-body-s text-skip-neutral-700">800 créditos mensais</li>
            </ul>

            <Separator className="bg-skip-neutral-1350 mb-5" />

            {/* Incluso */}
            <div className="mb-5">
              <h3 className="font-mono text-mono-xs tracking-[0.1em] text-blue-violet-600 uppercase font-semibold mb-3">
                Incluso
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  'Projetos ilimitados',
                  'Baixar código-fonte',
                  'Gerenciar versões',
                  'Integração com Banco de Dados (Supabase)',
                  'Remover badge do Skip',
                  'Suporte por e-mail',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-violet-600 shrink-0" />
                    <span className="font-body text-body-s text-skip-neutral-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bonus */}
            <div className="mb-6">
              <h3 className="font-mono text-mono-xs tracking-[0.1em] text-blue-violet-600 uppercase font-semibold mb-3">
                Bônus
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  '4 Cursos: Planilha em App, Sistema de RH, Plataforma de Cursos e CRM',
                  'Templates front-end personalizados',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Gift className="w-5 h-5 text-blue-violet-600 shrink-0" />
                    <span className="font-body text-body-s text-skip-neutral-800 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-blue-violet-600 shrink-0" />
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-body text-body-s text-skip-neutral-800 font-medium">
                      2 Consultorias individuais gratuitas
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-semibold uppercase tracking-wider border border-red-100">
                      exclusivo da live
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-auto flex flex-col items-center gap-3 w-full">
              <div className="relative group w-full">
                <div className="absolute -inset-1 bg-gradient-brand rounded-[90px] blur opacity-25 group-hover:opacity-40 transition duration-500" />
                {directCheckout ? (
                  <Button
                    onClick={handleDirectCheckout}
                    className="relative w-full font-display font-medium text-sm sm:text-base text-white transition-all duration-300 group-hover:-translate-y-0.5 py-3 h-auto"
                  >
                    Quero o Skip Basic
                    <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                  </Button>
                ) : (
                  <LeadCaptureModal>
                    <Button className="relative w-full font-display font-medium text-sm sm:text-base text-white transition-all duration-300 group-hover:-translate-y-0.5 py-3 h-auto">
                      Quero o Skip Basic
                      <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                    </Button>
                  </LeadCaptureModal>
                )}
              </div>
              <div className="flex items-center gap-3 text-skip-neutral-900 mt-1">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  <span className="font-body text-[12px] md:text-body-xs font-medium uppercase tracking-wide whitespace-nowrap">
                    30 dias de garantia
                  </span>
                </div>
                <div className="w-1 h-1 rounded-full bg-skip-neutral-1100" />
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4" />
                  <span className="font-body text-[12px] md:text-body-xs font-medium uppercase tracking-wide whitespace-nowrap">
                    Compra segura
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="flex items-center justify-center w-full group order-first lg:order-none">
            <img
              src={offerSkipUrl}
              alt="Skip Offer Bundle"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Exclusivo da Live Banner */}
        <div className="mt-8 md:mt-12 bg-skip-neutral-300 border border-skip-neutral-1350 rounded-[20px] overflow-hidden flex flex-col md:flex-row items-stretch w-full shadow-md">
          {/* Left Content (60%) */}
          <div className="w-full md:w-[60%] flex flex-col justify-center p-5 md:p-10 lg:p-12 relative z-20">
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 w-fit mb-6">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </div>
              <span className="font-mono text-mono-xs tracking-[0.2em] text-red-500 uppercase font-semibold">
                Exclusivo da Live
              </span>
            </div>

            <h3 className="font-heading text-[22px] md:text-[28px] leading-[1.1] font-semibold text-white">
              2 Consultorias Individuais Gratuitas
            </h3>

            <div className="mt-3 md:mt-4 font-body text-body-s text-skip-neutral-1300 flex flex-col gap-3">
              <p>
                2 calls individuais com um consultor especializado em Skip que irá te ajudar a
                construir os seus sistemas de forma relâmpago.
              </p>
              <div>
                <p className="mb-2">Nessas calls, você poderá:</p>
                <ul className="flex flex-col gap-1.5 list-disc pl-5 marker:text-blue-violet-500">
                  <li>Criar seus sistemas ao vivo com um consultor Skip</li>
                  <li>Garantir que seu app funcione perfeitamente integrado com sua empresa</li>
                  <li>
                    Receber um "Pente Fino" profissional no seu sistema para garantir que ele atinja
                    seus objetivos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Image (40%) */}
          <div className="w-full md:w-[40%] relative min-h-[250px] md:min-h-0 bg-skip-neutral-1350 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-skip-neutral-300 to-transparent z-10" />
            <img
              src={consultoriaImgUrl}
              alt="Consultoria Individual na Prática"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

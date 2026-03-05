import { Check, Gift, Shield, ArrowRight, Info, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'

export function OfferSection() {
  return (
    <section className="w-full py-24 md:py-32 px-5 bg-white relative z-10 border-t border-skip-neutral-1350/50">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Offer Card */}
          <div className="bg-white rounded-[20px] border border-skip-neutral-1350 shadow-elevation p-6 md:p-8 flex flex-col transition-all duration-300 hover:shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 w-fit mb-6">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </div>
              <span className="font-mono text-mono-xs tracking-[0.2em] text-red-500 uppercase font-semibold">
                Oferta da Live
              </span>
            </div>

            <h2 className="font-heading text-h4 font-semibold text-skip-neutral-300 mb-2">
              Skip Basic
            </h2>
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="font-heading text-[40px] leading-none font-bold text-skip-neutral-300">
                R$ 199
              </span>
              <span className="font-heading text-xl font-bold text-skip-neutral-300">/mês</span>
            </div>
            <p className="font-body text-body-xs text-skip-neutral-800 mb-6">cobrado anualmente</p>

            <ul className="flex flex-col gap-2.5 mb-8">
              <li className="font-body text-body-s text-skip-neutral-700">01 licença</li>
              <li className="flex items-center gap-1.5 font-body text-body-s text-skip-neutral-700">
                <span>800 créditos mensais</span>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 text-skip-neutral-900 cursor-help transition-colors hover:text-blue-violet-600" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-skip-neutral-300 text-white border-skip-neutral-400">
                      <p className="font-body text-body-xs">
                        10 créditos por build · 3 créditos por chat
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li className="font-body text-body-s text-skip-neutral-700">SLA 5 dias úteis</li>
            </ul>

            <Separator className="bg-skip-neutral-1350 mb-6" />

            {/* Incluso */}
            <div className="mb-8">
              <h3 className="font-mono text-mono-xs tracking-[0.1em] text-blue-violet-600 uppercase font-semibold mb-4">
                Incluso
              </h3>
              <ul className="flex flex-col gap-3">
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
            <div className="mb-10">
              <h3 className="font-mono text-mono-xs tracking-[0.1em] text-blue-violet-600 uppercase font-semibold mb-4">
                Bônus
              </h3>
              <ul className="flex flex-col gap-3">
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
            <div className="mt-auto flex flex-col items-center gap-4">
              <Button className="w-full h-auto py-4 sm:py-5 text-base sm:text-lg font-display font-bold !bg-blue-violet-600 hover:!bg-blue-violet-700 !bg-none text-white rounded-[90px] shadow-lg shadow-blue-violet-600/20 transition-all duration-300 hover:-translate-y-1">
                Quero o Skip Basic <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <div className="flex items-center gap-3 text-skip-neutral-900 mt-2">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  <span className="font-body text-body-xs font-medium uppercase tracking-wide">
                    30 dias de garantia
                  </span>
                </div>
                <div className="w-1 h-1 rounded-full bg-skip-neutral-1100" />
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4" />
                  <span className="font-body text-body-xs font-medium uppercase tracking-wide">
                    Compra segura
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup Container */}
          <div className="bg-skip-neutral-1450 border border-skip-neutral-1350 rounded-[20px] flex items-center justify-center min-h-[400px] lg:min-h-full">
            <span className="font-body text-body-s text-skip-neutral-900">[ mockup ]</span>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { SectionTitle } from '@/components/ui/section-title'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import {
  AgentsMockup,
  DatabaseMockup,
  AuthMockup,
  AIMockup,
  DeployMockup,
  CodeMockup,
  ChatMockup,
} from './FeatureMockups'

function BentoCard({
  className,
  title,
  description,
  mockup,
}: {
  className?: string
  title: string
  description: string
  mockup: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'rounded-[20px] border border-skip-neutral-1350 p-4 md:p-5 bg-white shadow-sm flex flex-col overflow-hidden relative group hover:shadow-md transition-all duration-500',
        className,
      )}
    >
      <div className="w-full flex-1 min-h-[160px] bg-slate-50 bg-skip-neutral-1450 rounded-[12px] overflow-hidden border border-slate-100 mb-6 relative group-hover:bg-slate-100/50 transition-colors duration-500 flex items-center justify-center">
        {mockup}
      </div>
      <div className="mt-auto relative z-10">
        <h3 className="font-heading text-body-l leading-[1.1] font-semibold text-skip-neutral-300 mb-3 tracking-[-0.02em] group-hover:text-blue-violet-700 transition-colors">
          {title}
        </h3>
        <p className="font-body text-skip-neutral-800 leading-[1.3] text-[15px]">{description}</p>
      </div>
    </div>
  )
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full py-12 md:py-32 px-5 relative z-10 bg-white">
      <div ref={ref} className="max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div
          className={cn(
            'text-center mb-10 md:mb-16 flex flex-col items-center w-full transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          )}
        >
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-blue-violet-600 uppercase font-semibold mb-2 md:mb-3">
            FUNCIONALIDADES
          </span>
          <SectionTitle className="font-heading font-semibold text-skip-neutral-300 mb-4 max-w-3xl tracking-[-0.02em]">
            Skip não apenas gera código
          </SectionTitle>
          <p className="font-body text-lg md:text-xl text-skip-neutral-800 max-w-[580px] mx-auto leading-[1.3]">
            Ele gerencia todo o ciclo de vida de uma aplicação robusta, desde o banco de dados até a
            interface
          </p>
        </div>

        {/* Grid */}
        <div
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full auto-rows-[minmax(340px,auto)] transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          )}
        >
          {/* 1. Agentes - Large, 2 cols */}
          <BentoCard
            className="md:col-span-2 lg:col-span-2 min-h-[380px]"
            title="Agentes de Desenvolvimento"
            description="Cada comando ativa uma equipe completa de IA: um PM desenha a interface, um Tech Lead define a arquitetura, um Dev escreve o código e um QA testa antes de entregar."
            mockup={<AgentsMockup />}
          />

          {/* 2. Banco de Dados - Medium, 1 col */}
          <BentoCard
            className="md:col-span-1 lg:col-span-1 min-h-[380px]"
            title="Banco de Dados Profissional"
            description="Seus sistemas rodam sobre o Supabase — a mesma infraestrutura usada por Mozilla, Johnson & Johnson e mais de 1.000 startups do Y Combinator. Enterprise desde o primeiro dia."
            mockup={<DatabaseMockup />}
          />

          {/* 3. Autenticação - Small */}
          <BentoCard
            className="col-span-1 min-h-[340px]"
            title="Autenticação Pronta para Uso"
            description="Email, Google e outros provedores configurados em minutos, com controle de permissões e segurança inclusos. Seu time acessa no mesmo dia."
            mockup={<AuthMockup />}
          />

          {/* 4. IA Conectada - Small */}
          <BentoCard
            className="col-span-1 min-h-[340px]"
            title="IA Conectada ao Seu Sistema"
            description="Integre os principais modelos de IA diretamente nos seus processos. O Skip gerencia as chaves de API com segurança — sem precisar de um desenvolvedor para fazer a conexão."
            mockup={<AIMockup />}
          />

          {/* 5. Publicação - Small */}
          <BentoCard
            className="col-span-1 min-h-[340px]"
            title="Publicação com Um Clique"
            description="URL própria, SSL e hospedagem otimizada instantaneamente. Para mais controle, domínio personalizado e sincronização com GitHub inclusos."
            mockup={<DeployMockup />}
          />

          {/* 6. Código - Large, 2 cols */}
          <BentoCard
            className="md:col-span-2 lg:col-span-2 min-h-[380px]"
            title="Código Limpo e Escalável"
            description="React, TypeScript e Tailwind CSS — o mesmo stack do Netflix, Airbnb e Spotify. Seu sistema nasce performático, seguro e nos padrões da indústria global."
            mockup={<CodeMockup />}
          />

          {/* 7. Modo Consultor - Medium, 1 col */}
          <BentoCard
            className="md:col-span-1 lg:col-span-1 min-h-[380px]"
            title="Modo Consultor"
            description="Antes de construir, converse. Discuta arquitetura, valide ideias e peça sugestões — sem iniciar nada. Um consultor técnico disponível 24h."
            mockup={<ChatMockup />}
          />
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12 md:mt-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-brand rounded-[90px] blur opacity-25 group-hover:opacity-40 transition duration-500" />
            <Button
              onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative font-display font-medium text-sm sm:text-base text-white transition-all duration-300 group-hover:-translate-y-0.5"
            >
              Aproveitar Condição Exclusiva
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

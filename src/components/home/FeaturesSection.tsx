import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
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
        'rounded-[20px] border border-skip-neutral-1350 p-7 bg-white shadow-sm flex flex-col overflow-hidden relative group hover:shadow-md transition-all duration-500',
        className,
      )}
    >
      <div className="w-full flex-1 min-h-[160px] bg-slate-50 bg-skip-neutral-1450 rounded-[12px] overflow-hidden border border-slate-100 mb-6 relative group-hover:bg-slate-100/50 transition-colors duration-500 flex items-center justify-center">
        {mockup}
      </div>
      <div className="mt-auto relative z-10">
        <h3 className="font-heading text-body-l font-bold text-skip-neutral-300 mb-3 tracking-tight group-hover:text-blue-violet-700 transition-colors">
          {title}
        </h3>
        <p className="font-body text-skip-neutral-800 leading-relaxed text-body-s">{description}</p>
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
    <section className="w-full py-24 md:py-32 px-5 relative z-10 bg-white">
      <div ref={ref} className="max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div
          className={cn(
            'text-center mb-16 flex flex-col items-center w-full transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          )}
        >
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-blue-violet-600 uppercase font-semibold mb-6">
            FUNCIONALIDADES
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-bold text-skip-neutral-300 mb-6 max-w-3xl leading-tight tracking-tight">
            Skip não apenas gera código
          </h2>
          <p className="font-body text-lg md:text-xl text-skip-neutral-800 max-w-2xl mx-auto">
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
            description="Uma equipe de agentes inteligentes trabalhando em paralelo para arquitetar, escrever e testar sua aplicação em tempo real, sem intervenção humana."
            mockup={<AgentsMockup />}
          />

          {/* 2. Banco de Dados - Medium, 1 col */}
          <BentoCard
            className="md:col-span-1 lg:col-span-1 min-h-[380px]"
            title="Banco de Dados Profissional"
            description="Esquemas relacionais estruturados automaticamente com PostgreSQL, garantindo integridade e alta performance."
            mockup={<DatabaseMockup />}
          />

          {/* 3. Autenticação - Small */}
          <BentoCard
            className="col-span-1 min-h-[340px]"
            title="Autenticação Pronta"
            description="Sistemas de login seguros com múltiplos provedores e controle de acesso integrado."
            mockup={<AuthMockup />}
          />

          {/* 4. IA Conectada - Small */}
          <BentoCard
            className="col-span-1 min-h-[340px]"
            title="IA Conectada ao Seu Sistema"
            description="Integre capacidades de inteligência artificial diretamente nas regras de negócio da sua aplicação."
            mockup={<AIMockup />}
          />

          {/* 5. Publicação - Small */}
          <BentoCard
            className="col-span-1 min-h-[340px]"
            title="Publicação com Um Clique"
            description="Deploy instantâneo da sua aplicação com URLs personalizadas, certificados SSL e infraestrutura escalável."
            mockup={<DeployMockup />}
          />

          {/* 6. Código - Large, 2 cols */}
          <BentoCard
            className="md:col-span-2 lg:col-span-2 min-h-[380px]"
            title="Código Limpo e Escalável"
            description="O Skip não cria 'caixas pretas'. Você recebe código-fonte moderno, tipado e otimizado, pronto para qualquer time de engenharia assumir."
            mockup={<CodeMockup />}
          />

          {/* 7. Modo Consultor - Medium, 1 col */}
          <BentoCard
            className="md:col-span-1 lg:col-span-1 min-h-[380px]"
            title="Modo Consultor"
            description="Um assistente que entende o contexto do seu negócio e sugere melhorias contínuas para o seu sistema."
            mockup={<ChatMockup />}
          />
        </div>
      </div>
    </section>
  )
}

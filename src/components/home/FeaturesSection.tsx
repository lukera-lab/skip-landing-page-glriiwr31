import { useEffect, useRef, useState } from 'react'
import { Database, Lock, Zap, Link, MessageSquare, MousePointer2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

// Graphic Components
const AgentsGraphic = () => (
  <div className="w-16 h-16 relative opacity-70 group-hover:opacity-100 transition-opacity duration-500">
    <svg className="absolute inset-0 w-full h-full text-skip-neutral-1350" viewBox="0 0 64 64">
      <path
        d="M14 14 L32 32 L50 32 M14 50 L32 32"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
    <div className="absolute top-2 left-2 w-3 h-3 rounded-full border-2 border-blue-violet-600 bg-white z-10" />
    <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full border-2 border-blue-violet-600 bg-white z-10" />
    <div className="absolute top-1/2 right-2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-blue-violet-600 bg-white z-10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-blue-violet-600 bg-blue-violet-100 z-10 shadow-[0_0_10px_rgba(79,70,229,0.5)]" />
  </div>
)

const TechBadges = () => (
  <div className="flex flex-wrap gap-2 justify-end max-w-[150px]">
    <Badge
      variant="outline"
      className="bg-sky-50/50 text-sky-700 hover:bg-sky-50 border-sky-200 shadow-none font-body"
    >
      React
    </Badge>
    <Badge
      variant="outline"
      className="bg-blue-50/50 text-blue-700 hover:bg-blue-50 border-blue-200 shadow-none font-body"
    >
      TypeScript
    </Badge>
    <Badge
      variant="outline"
      className="bg-teal-50/50 text-teal-700 hover:bg-teal-50 border-teal-200 shadow-none font-body"
    >
      Tailwind
    </Badge>
  </div>
)

// Card Component
function BentoCard({
  className,
  title,
  description,
  icon,
  topRight,
}: {
  className?: string
  title: string
  description: string
  icon?: React.ReactNode
  topRight?: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'rounded-[20px] border border-skip-neutral-1350 p-7 bg-white shadow-sm flex flex-col overflow-hidden relative group hover:shadow-md transition-all duration-500',
        className,
      )}
    >
      {icon && (
        <div className="w-12 h-12 rounded-[14px] bg-blue-violet-50 flex items-center justify-center mb-6 text-blue-violet-600 transition-transform duration-500 group-hover:scale-110 group-hover:bg-blue-violet-100">
          {icon}
        </div>
      )}
      {topRight && <div className="absolute top-7 right-7">{topRight}</div>}
      <div className="mt-auto relative z-10">
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-skip-neutral-900 mb-3 tracking-tight group-hover:text-blue-violet-700 transition-colors">
          {title}
        </h3>
        <p className="font-body text-skip-neutral-800 leading-relaxed text-sm md:text-base">
          {description}
        </p>
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
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-semibold text-skip-neutral-900 mb-6 max-w-3xl leading-tight tracking-tight">
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
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full auto-rows-[minmax(220px,auto)] transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          )}
        >
          {/* 1. Agentes - Large, 2 cols */}
          <BentoCard
            className="md:col-span-2 lg:col-span-2 min-h-[280px]"
            title="Agentes de Desenvolvimento"
            description="Uma equipe de agentes inteligentes trabalhando em paralelo para arquitetar, escrever e testar sua aplicação em tempo real, sem intervenção humana."
            topRight={<AgentsGraphic />}
          />

          {/* 2. Banco de Dados - Medium, 1 col */}
          <BentoCard
            className="md:col-span-1 lg:col-span-1 min-h-[280px]"
            title="Banco de Dados Profissional"
            description="Esquemas relacionais estruturados automaticamente com PostgreSQL, garantindo integridade e alta performance."
            icon={<Database className="w-6 h-6" />}
          />

          {/* 3. Autenticação - Small */}
          <BentoCard
            className="col-span-1 min-h-[240px]"
            title="Autenticação Pronta"
            description="Sistemas de login seguros com múltiplos provedores e controle de acesso integrado."
            icon={<Lock className="w-6 h-6" />}
          />

          {/* 4. IA Conectada - Small */}
          <BentoCard
            className="col-span-1 min-h-[240px]"
            title="IA Conectada ao Seu Sistema"
            description="Integre capacidades de inteligência artificial diretamente nas regras de negócio da sua aplicação."
            icon={<Zap className="w-6 h-6" />}
          />

          {/* 5. Publicação - Small */}
          <BentoCard
            className="col-span-1 min-h-[240px]"
            title="Publicação com Um Clique"
            description="Deploy instantâneo da sua aplicação com URLs personalizadas, certificados SSL e infraestrutura escalável."
            icon={<Link className="w-6 h-6" />}
          />

          {/* 6. Código - Large, 2 cols */}
          <BentoCard
            className="md:col-span-2 lg:col-span-2 min-h-[280px]"
            title="Código Limpo e Escalável"
            description="O Skip não cria 'caixas pretas'. Você recebe código-fonte moderno, tipado e otimizado, pronto para qualquer time de engenharia assumir."
            topRight={<TechBadges />}
          />

          {/* 7. Modo Consultor - Medium, 1 col */}
          <BentoCard
            className="md:col-span-1 lg:col-span-1 min-h-[280px]"
            title="Modo Consultor"
            description="Um assistente que entende o contexto do seu negócio e sugere melhorias contínuas para o seu sistema."
            icon={
              <div className="relative">
                <MessageSquare className="w-6 h-6" />
                <MousePointer2
                  className="w-4 h-4 text-fuchsia-500 absolute -bottom-1 -right-1"
                  fill="currentColor"
                />
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
}

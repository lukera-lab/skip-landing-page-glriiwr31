import { cn } from '@/lib/utils'
import { SectionTitle } from '@/components/ui/section-title'
import { Step1Mockup, Step2Mockup, Step3Mockup, Step4Mockup } from './PlatformMockups'
import mockskipUrl from '@/assets/mockskip-97ef9.webp'
import { useEffect, useRef, useState } from 'react'

interface WorkflowStepProps {
  step: string
  title: string
  description: string
  layout: 'text-left' | 'text-right'
  mockup: React.ReactNode
  hasFrame?: boolean
}

function WorkflowStep({
  step,
  title,
  description,
  layout,
  mockup,
  hasFrame = true,
}: WorkflowStepProps) {
  const isTextLeft = layout === 'text-left'
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-0 items-center w-full group"
    >
      {/* Checkpoint Marker */}
      <div
        className={cn(
          'absolute left-[2px] md:left-1/2 top-[16px] md:top-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full border-[3px] md:border-[4px] border-skip-neutral-300 z-20 -translate-x-1/2 md:-translate-y-1/2 transition-all duration-500',
          isVisible
            ? 'bg-blue-violet-600 scale-110 shadow-[0_0_20px_rgba(79,70,229,0.6)]'
            : 'bg-skip-neutral-600 scale-100',
        )}
      >
        {isVisible && (
          <div className="absolute inset-0 rounded-full bg-blue-violet-400 animate-ping opacity-50" />
        )}
      </div>

      {/* Text Container - Always first in DOM for mobile stack order */}
      <div
        className={cn(
          'w-[calc(100%-24px)] ml-6 md:w-full md:ml-0 transition-all duration-1000 ease-out z-10 flex flex-col',
          isVisible
            ? 'opacity-100 translate-x-0 translate-y-0'
            : cn(
                'opacity-0 translate-y-8 md:translate-y-0',
                isTextLeft ? 'md:-translate-x-16' : 'md:translate-x-16',
              ),
          isTextLeft ? 'md:col-start-1 md:pr-12 lg:pr-20' : 'md:col-start-2 md:pl-12 lg:pl-20',
        )}
      >
        <span className="font-mono text-mono-xs tracking-[0.2em] text-blue-violet-500 uppercase font-semibold mb-4">
          {step}
        </span>
        <h3 className="font-heading text-3xl md:text-[36px] font-semibold text-white mb-4 tracking-tight">
          {title}
        </h3>
        <p className="font-body text-body-m text-skip-neutral-900">{description}</p>
      </div>

      {/* Mockup Container - Always second in DOM */}
      <div
        className={cn(
          'w-[calc(100%-24px)] ml-6 md:w-full md:ml-0 mt-8 md:mt-0 transition-all duration-1000 ease-out z-10 md:delay-150',
          isVisible
            ? 'opacity-100 translate-x-0 translate-y-0'
            : cn(
                'opacity-0 translate-y-8 md:translate-y-0',
                isTextLeft ? 'md:translate-x-16' : 'md:-translate-x-16',
              ),
          isTextLeft
            ? 'md:col-start-2 md:pl-12 lg:pl-20 md:row-start-1'
            : 'md:col-start-1 md:pr-12 lg:pr-20 md:row-start-1',
        )}
      >
        {hasFrame ? (
          <div className="bg-skip-neutral-1450 rounded-[24px] p-4 md:p-8 border border-skip-neutral-1350/50 relative shadow-sm">
            {mockup}
          </div>
        ) : (
          <div className="relative w-full">{mockup}</div>
        )}
      </div>
    </div>
  )
}

export function PlatformSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const triggerPoint = windowHeight * 0.6
      let p = (triggerPoint - rect.top) / rect.height
      p = Math.max(0, Math.min(1, p))
      setProgress(p)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="w-full py-24 px-5 relative z-10 bg-skip-neutral-300 overflow-hidden">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Headline */}
        <div className="text-center mb-12 flex flex-col items-center animate-fade-in-up relative z-20 w-full">
          <span className="font-mono text-mono-xs tracking-[0.2em] text-blue-violet-600 uppercase font-semibold mb-6">
            PLATAFORMA
          </span>
          <SectionTitle className="font-display font-semibold text-white mb-8 max-w-[680px] mx-auto text-center tracking-tight">
            Skip é a primeira plataforma de IA agêntica para criação de{' '}
            <br className="hidden md:block" /> Sistemas Internos
          </SectionTitle>
        </div>

        {/* Platform Mockup */}
        <div
          className="w-full max-w-4xl relative animate-fade-in-up flex justify-center items-center z-10"
          style={{ animationDelay: '200ms' }}
        >
          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-blue-violet-600 to-fuchsia-600 opacity-35 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

          <div className="relative w-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
            <img
              src={mockskipUrl}
              alt="Skip Platform Interface Mockup"
              className="w-full h-auto relative z-10 object-contain"
            />
          </div>
        </div>

        {/* How it works Title */}
        <div
          className="w-full mt-[80px] mb-20 flex justify-center animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          <SectionTitle className="font-heading font-semibold text-white text-center tracking-tight">
            Como funciona?
          </SectionTitle>
        </div>

        {/* Workflow Steps with Timeline */}
        <div
          ref={containerRef}
          className="w-full flex flex-col gap-24 md:gap-32 relative z-20 pt-4 pb-12"
        >
          {/* Background Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-4 bottom-0 w-1 bg-skip-neutral-600/50 md:-translate-x-1/2 rounded-full [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]" />

          {/* Active Progress Line */}
          <div
            className="absolute left-0 md:left-1/2 top-4 w-1 bg-blue-violet-600 md:-translate-x-1/2 transition-all duration-200 ease-out rounded-full"
            style={{ height: `calc((100% - 16px) * ${progress})` }}
          />

          <WorkflowStep
            step="01"
            title="Descreva sua ideia"
            description="Conte para o Skip qual sistema você deseja construir para sua empresa."
            layout="text-left"
            mockup={<Step1Mockup />}
            hasFrame={false}
          />
          <WorkflowStep
            step="02"
            title="Receba seu Sistema"
            description="Skip analisa sua ideia e cria a primeira versão funcional do seu sistema."
            layout="text-right"
            mockup={<Step2Mockup />}
            hasFrame={false}
          />
          <WorkflowStep
            step="03"
            title="Personalize e ajuste"
            description="Continue a interação melhorando tudo o que quiser do projeto."
            layout="text-left"
            mockup={<Step3Mockup />}
            hasFrame={false}
          />
          <WorkflowStep
            step="04"
            title="Compartilhe com seu time"
            description="Com um clique, sua aplicação fica online com URL personalizada, SSL e hosting otimizado."
            layout="text-right"
            mockup={<Step4Mockup />}
            hasFrame={false}
          />
        </div>
      </div>
    </section>
  )
}

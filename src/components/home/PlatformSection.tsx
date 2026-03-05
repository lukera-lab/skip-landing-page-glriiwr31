import { cn } from '@/lib/utils'
import { Step1Mockup, Step2Mockup, Step3Mockup, Step4Mockup } from './PlatformMockups'
import mockskipUrl from '@/assets/mockskip-97ef9.webp'

interface WorkflowStepProps {
  step: string
  title: string
  description: string
  layout: 'text-left' | 'text-right'
  mockup: React.ReactNode
}

function WorkflowStep({ step, title, description, layout, mockup }: WorkflowStepProps) {
  const isTextLeft = layout === 'text-left'

  return (
    <div
      className={cn(
        'flex flex-col gap-10 md:gap-16 items-center',
        isTextLeft ? 'md:flex-row' : 'md:flex-row-reverse',
      )}
    >
      {/* Text Content */}
      <div className="flex-1 w-full flex flex-col animate-fade-in-up">
        <span className="font-mono text-mono-xs tracking-[0.2em] text-blue-violet-500 uppercase font-semibold mb-4">
          {step}
        </span>
        <h3 className="font-heading text-3xl md:text-[36px] font-semibold text-white mb-4 tracking-tight">
          {title}
        </h3>
        <p className="font-body text-body-m text-skip-neutral-900">{description}</p>
      </div>

      {/* Mockup Container */}
      <div className="flex-[1.5] w-full animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="bg-skip-neutral-1450 rounded-[24px] p-4 md:p-8 border border-skip-neutral-1350/50 relative shadow-sm">
          {mockup}
        </div>
      </div>
    </div>
  )
}

export function PlatformSection() {
  return (
    <section className="w-full py-24 px-5 relative z-10 bg-skip-neutral-300 overflow-hidden">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Headline */}
        <div className="text-center mb-12 flex flex-col items-center animate-fade-in-up relative z-20 w-full">
          <span className="font-mono text-mono-xs tracking-[0.2em] text-blue-violet-600 uppercase font-semibold mb-6">
            PLATAFORMA
          </span>
          <h2 className="font-display text-4xl md:text-[48px] font-semibold text-white mb-8 max-w-[680px] mx-auto text-center leading-tight tracking-tight">
            Skip é a primeira plataforma de IA agêntica para criação de{' '}
            <br className="hidden md:block" /> Sistemas Internos
          </h2>
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
          <h2 className="font-heading text-4xl md:text-[48px] font-semibold text-white text-center tracking-tight">
            Como funciona?
          </h2>
        </div>

        {/* Workflow Steps */}
        <div className="w-full flex flex-col gap-24 md:gap-32 relative z-20">
          <WorkflowStep
            step="01"
            title="Descreva sua ideia"
            description="Conte para o Skip qual sistema você deseja construir para sua empresa."
            layout="text-left"
            mockup={<Step1Mockup />}
          />
          <WorkflowStep
            step="02"
            title="Receba seu Sistema"
            description="Skip analisa sua ideia e cria a primeira versão funcional do seu sistema."
            layout="text-right"
            mockup={<Step2Mockup />}
          />
          <WorkflowStep
            step="03"
            title="Personalize e ajuste"
            description="Continue a interação melhorando tudo o que quiser do projeto."
            layout="text-left"
            mockup={<Step3Mockup />}
          />
          <WorkflowStep
            step="04"
            title="Compartilhe com seu time"
            description="Com um clique, sua aplicação fica online com URL personalizada, SSL e hosting otimizado."
            layout="text-right"
            mockup={<Step4Mockup />}
          />
        </div>
      </div>
    </section>
  )
}

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Step1Mockup, Step2Mockup, Step3Mockup, Step4Mockup } from './PlatformMockups'
import { cn } from '@/lib/utils'

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
        <span className="font-mono text-mono-xl text-blue-violet-600 mb-4">{step}</span>
        <h3 className="font-heading text-4xl md:text-5xl font-semibold text-skip-neutral-100 mb-4 tracking-tight">
          {title}
        </h3>
        <p className="font-body text-body-l text-skip-neutral-800">{description}</p>
      </div>

      {/* Mockup Container */}
      <div className="flex-[1.5] w-full animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="bg-skip-neutral-1450 rounded-[24px] p-4 md:p-8 border border-skip-neutral-1350/50 relative">
          {mockup}
        </div>
      </div>
    </div>
  )
}

export function PlatformSection() {
  return (
    <section className="w-full py-24 px-5 relative z-10 bg-white">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Headline */}
        <div className="text-center mb-12 flex flex-col items-center animate-fade-in-up">
          <span className="font-mono text-mono-xs tracking-[0.2em] text-blue-violet-600 uppercase font-semibold mb-6">
            A PLATAFORMA
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-semibold text-skip-neutral-100 mb-8 max-w-4xl leading-tight tracking-tight">
            Skip é a primeira plataforma de IA agêntica para criação de Sistemas Internos
          </h2>
        </div>

        {/* Platform Placeholder */}
        <div
          className="w-full max-w-5xl mb-32 animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          <AspectRatio
            ratio={16 / 9}
            className="bg-skip-neutral-1500 rounded-[20px] border border-skip-neutral-1350 shadow-subtle overflow-hidden relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-body text-body-s text-skip-neutral-900">
                [ screenshot da plataforma ]
              </span>
            </div>
          </AspectRatio>
        </div>

        {/* Workflow Steps */}
        <div className="w-full flex flex-col gap-24 md:gap-32">
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

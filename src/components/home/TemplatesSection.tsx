import { cn } from '@/lib/utils'

const TEMPLATES = [
  {
    label: 'Gestão Comercial',
    chips: ['CRM B2B', 'Sistema de Cotação', 'Portal do Cliente'],
  },
  {
    label: 'Operações & Processos',
    chips: ['Checklist Operacional', 'Gestão de Projetos', 'Timesheet'],
  },
  {
    label: 'Pessoas & Cultura',
    chips: ['Controle de RH', 'Universidade Corporativa', 'Intranet'],
  },
  {
    label: 'Dados & Inteligência',
    chips: ['Central de Indicadores', 'Formulário de Diagnóstico', 'Sistema de Feedback'],
  },
]

export function TemplatesSection() {
  return (
    <section className="w-full py-24 md:py-32 px-5 bg-skip-neutral-300 relative z-10 overflow-hidden">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="flex items-center justify-center mb-8 animate-fade-in-up">
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </div>
            <span className="font-mono text-mono-xs tracking-[0.2em] text-red-500 uppercase font-semibold">
              Disponível durante a Live
            </span>
          </div>
        </div>

        {/* Headline */}
        <div
          className="max-w-[600px] mx-auto text-center mb-16 animate-fade-in-up"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          <h2 className="font-heading text-[28px] md:text-[40px] font-semibold text-white mb-6 tracking-tight leading-[1.1em]">
            Tenha sistemas internos prontos <br /> para implementar hoje
          </h2>
          <p className="font-body text-body-m text-skip-neutral-900">
            Explore nossa biblioteca de templates e personalize o que mais fizer sentido para a sua
            operação
          </p>
        </div>

        {/* Grid */}
        <div
          className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up"
          style={{ animationDelay: '200ms', animationFillMode: 'both' }}
        >
          {TEMPLATES.map((template) => (
            <div
              key={template.label}
              className="bg-skip-neutral-400 rounded-[20px] p-[28px] border border-skip-neutral-600 flex flex-col gap-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-skip-neutral-700"
            >
              <h3 className="font-mono text-mono-xs tracking-[0.15em] text-blue-violet-500 uppercase font-semibold">
                {template.label}
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {template.chips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3.5 py-1.5 rounded-full bg-skip-neutral-500 text-skip-neutral-1100 font-body text-[13px] sm:text-sm font-medium"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

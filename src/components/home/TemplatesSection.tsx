import { cn } from '@/lib/utils'
import { SectionTitle } from '@/components/ui/section-title'

const GestaoComercialMockup = () => (
  <div className="flex flex-col p-3 w-full h-full justify-between">
    <div className="grid grid-cols-3 gap-2 px-2 pb-1.5 border-b border-skip-neutral-600/40">
      {['Lead', 'Empresa', 'Status'].map((l) => (
        <span
          key={l}
          className="text-[9px] text-skip-neutral-900 font-medium uppercase tracking-wider"
        >
          {l}
        </span>
      ))}
    </div>
    <div className="flex flex-col gap-1.5">
      {[
        {
          n: 'João Silva',
          c: 'Acme Corp',
          s: 'Proposta',
          b: 'bg-[#F2C94C]/10 text-[#F2C94C] border-[#F2C94C]/20',
        },
        {
          n: 'Maria Costa',
          c: 'TechNova',
          s: 'Negociando',
          b: 'bg-[#56CCF2]/10 text-[#56CCF2] border-[#56CCF2]/20',
        },
        {
          n: 'Pedro Alves',
          c: 'Global Ind',
          s: 'Fechado',
          b: 'bg-[#6FCF97]/10 text-[#6FCF97] border-[#6FCF97]/20',
        },
      ].map((r, i) => (
        <div
          key={i}
          className="grid grid-cols-3 gap-2 items-center px-2 py-1.5 bg-skip-neutral-400/40 rounded-md"
        >
          <span className="text-[10px] text-skip-neutral-1100 font-medium truncate">{r.n}</span>
          <span className="text-[10px] text-skip-neutral-900 truncate">{r.c}</span>
          <div>
            <span className={cn('text-[8px] px-1.5 py-0.5 rounded-sm font-semibold border', r.b)}>
              {r.s}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const OperacoesProcessosMockup = () => (
  <div className="flex gap-2 p-3 w-full h-full">
    {[
      { t: 'A Fazer', c: 2 },
      { t: 'Em Andamento', c: 3 },
      { t: 'Concluído', c: 2 },
    ].map((col, i) => (
      <div
        key={i}
        className="flex-1 flex flex-col gap-1.5 bg-skip-neutral-400/20 rounded-lg p-1.5 border border-skip-neutral-600/20"
      >
        <span className="text-[8px] text-skip-neutral-900 font-medium uppercase tracking-wider px-1">
          {col.t}
        </span>
        <div className="flex flex-col gap-1.5">
          {Array.from({ length: col.c }).map((_, j) => (
            <div
              key={j}
              className="bg-skip-neutral-400/80 h-4 rounded border border-skip-neutral-600/30 shadow-sm"
            />
          ))}
        </div>
      </div>
    ))}
  </div>
)

const PessoasCulturaMockup = () => (
  <div className="flex flex-col justify-center gap-1.5 p-3 w-full h-full">
    {[
      { n: 'Ana Clara', t: 'Product Manager', g: 'female', s: 1 },
      { n: 'Carlos Eduardo', t: 'Software Engineer', g: 'male', s: 2 },
      { n: 'Beatriz Lima', t: 'UX Designer', g: 'female', s: 3 },
    ].map((p, i) => (
      <div
        key={i}
        className="flex items-center gap-2.5 p-1.5 px-2 bg-skip-neutral-400/30 rounded-lg border border-skip-neutral-600/20"
      >
        <img
          src={`https://img.usecurling.com/ppl/thumbnail?gender=${p.g}&seed=${p.s}`}
          alt={p.n}
          className="w-5 h-5 rounded-full object-cover ring-1 ring-skip-neutral-600/40"
        />
        <div className="flex flex-col">
          <span className="text-[10px] text-skip-neutral-1100 font-medium leading-tight">
            {p.n}
          </span>
          <span className="text-[8px] text-skip-neutral-900 leading-tight mt-0.5">{p.t}</span>
        </div>
      </div>
    ))}
  </div>
)

const DadosInteligenciaMockup = () => (
  <div className="flex flex-col p-3 w-full h-full gap-2">
    <div className="grid grid-cols-2 gap-2">
      {[
        { l: 'Receita', v: 'R$ 45.2k' },
        { l: 'Usuários', v: '1.240' },
      ].map((kpi, i) => (
        <div
          key={i}
          className="bg-skip-neutral-400/40 rounded-lg p-1.5 px-2 flex flex-col border border-skip-neutral-600/30"
        >
          <span className="text-[8px] text-skip-neutral-900 font-medium uppercase tracking-wider">
            {kpi.l}
          </span>
          <span className="text-[11px] text-blue-violet-400 font-semibold mt-0.5">{kpi.v}</span>
        </div>
      ))}
    </div>
    <div className="flex-1 bg-skip-neutral-400/20 rounded-lg border border-skip-neutral-600/20 relative overflow-hidden">
      <svg
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        className="w-full h-full absolute inset-0 text-blue-violet-500"
      >
        <path
          d="M0,35 C10,35 15,25 25,25 C35,25 40,32 50,32 C60,32 65,15 75,15 C85,15 90,20 100,10 L100,40 L0,40 Z"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <path
          d="M0,35 C10,35 15,25 25,25 C35,25 40,32 50,32 C60,32 65,15 75,15 C85,15 90,20 100,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="25" cy="25" r="1.5" fill="currentColor" />
        <circle cx="50" cy="32" r="1.5" fill="currentColor" />
        <circle cx="75" cy="15" r="1.5" fill="currentColor" />
        <circle cx="100" cy="10" r="1.5" fill="currentColor" />
      </svg>
    </div>
  </div>
)

const TEMPLATES = [
  {
    label: 'Gestão Comercial',
    chips: ['CRM B2B', 'Sistema de Cotação', 'Portal do Cliente'],
    Mockup: GestaoComercialMockup,
  },
  {
    label: 'Operações & Processos',
    chips: ['Checklist Operacional', 'Gestão de Projetos', 'Timesheet'],
    Mockup: OperacoesProcessosMockup,
  },
  {
    label: 'Pessoas & Cultura',
    chips: ['Controle de RH', 'Universidade Corporativa', 'Intranet'],
    Mockup: PessoasCulturaMockup,
  },
  {
    label: 'Dados & Inteligência',
    chips: ['Central de Indicadores', 'Formulário de Diagnóstico', 'Sistema de Feedback'],
    Mockup: DadosInteligenciaMockup,
  },
]

export function TemplatesSection() {
  return (
    <section className="w-full py-12 md:py-32 px-5 bg-skip-neutral-300 relative z-10 overflow-hidden">
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
          className="max-w-[600px] mx-auto text-center mb-10 md:mb-16 animate-fade-in-up"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          <SectionTitle className="font-heading font-semibold text-white mb-4 tracking-[-0.02em]">
            Tenha sistemas internos prontos para implementar hoje
          </SectionTitle>
          <p className="font-body text-body-m text-skip-neutral-900 max-w-[480px] mx-auto">
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
              <div className="w-full h-[120px] bg-skip-neutral-500 rounded-[12px] overflow-hidden relative flex-shrink-0 border border-skip-neutral-600/30 shadow-inner">
                <template.Mockup />
              </div>

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

import { DemonstrationTabs } from './DemonstrationTabs'
import { SectionTitle } from '@/components/ui/section-title'

export function DemonstrationSection() {
  return (
    <section className="w-full py-24 md:py-32 px-5 bg-white relative z-10 overflow-hidden">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        <div className="text-center mb-4 flex flex-col items-center w-full animate-fade-in-up">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-blue-violet-600 uppercase font-semibold mb-6">
            DEMONSTRAÇÃO
          </span>
          <div className="flex flex-col items-center gap-[16px] w-full">
            <SectionTitle className="font-heading font-bold text-skip-neutral-300 max-w-3xl tracking-tight text-center">
              Veja a diferença na prática
            </SectionTitle>
            <p className="font-body text-base sm:text-lg lg:text-xl leading-relaxed text-skip-neutral-800 max-w-2xl mx-auto text-center">
              Compare o antes e o depois de estruturar seus processos no Skip
            </p>
          </div>
        </div>
        <DemonstrationTabs />
      </div>
    </section>
  )
}

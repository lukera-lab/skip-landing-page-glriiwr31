import { LeadCaptureModal } from './LeadCaptureModal'

export function HelloBar({ text = 'Entre para a Waitlist do Lançamento Oficial do Skip' }: { text?: string }) {
  return (
    <LeadCaptureModal>
      <button className="w-full bg-blue-violet-600 text-white py-2.5 px-4 text-center relative z-50 flex items-center justify-center border-b border-blue-violet-700/50 cursor-pointer hover:bg-blue-violet-700 transition-colors duration-200 shadow-[0_0_20px_rgba(109,40,217,0.3)]">
        <p className="font-heading text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
          {text} →
        </p>
      </button>
    </LeadCaptureModal>
  )
}

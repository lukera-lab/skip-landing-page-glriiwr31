import { ShieldCheck } from 'lucide-react'

export function GuaranteeSection() {
  return (
    <section className="w-full py-24 md:py-32 px-5 bg-skip-neutral-300 relative z-10 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background radial gradient for subtle depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div
        className="max-w-[600px] w-full flex flex-col items-center relative z-20 animate-fade-in-up"
        style={{ animationFillMode: 'both' }}
      >
        {/* 3D Minimalist Shield Icon */}
        <div className="relative flex items-center justify-center w-24 h-24 mb-8 group">
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-violet-600/30 blur-[40px] rounded-full transition-all duration-700 group-hover:w-36 group-hover:h-36 group-hover:opacity-60 group-hover:bg-blue-violet-500/40" />

          {/* 3D Container */}
          <div className="relative z-10 w-20 h-20 rounded-[20px] bg-gradient-to-b from-[#ffffff] to-[#e5e7eb] shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.05)] flex items-center justify-center border border-white/50 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1">
            {/* Inner Refraction/Reflection */}
            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-tr from-blue-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Icon */}
            <ShieldCheck
              className="w-10 h-10 text-blue-violet-600 drop-shadow-[0_2px_6px_rgba(79,70,229,0.4)] relative z-20 transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Label */}
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-blue-violet-500 uppercase font-semibold mb-2 md:mb-3">
          Garantia
        </span>

        {/* Main Title */}
        <h2 className="font-heading text-[28px] md:text-[40px] leading-[1.1em] font-semibold text-white mb-4 tracking-tight">
          Teste o Skip por 30 dias sem compromisso
        </h2>

        {/* Subtitle */}
        <p className="font-body text-sm md:text-base text-skip-neutral-800 leading-[1.3] max-w-[520px]">
          Se você não ficar satisfeito com o resultado, devolvemos 100% do valor investido — sem
          perguntas, sem burocracia.
        </p>
      </div>
    </section>
  )
}

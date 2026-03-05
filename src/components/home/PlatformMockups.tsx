import {
  Link as LinkIcon,
  Lock,
  Loader2,
  Sparkles,
  Send,
  FileCode2,
  Database,
  LayoutTemplate,
} from 'lucide-react'
import { Progress } from '@/components/ui/progress'

export function Step1Mockup() {
  return (
    <div className="w-full h-[280px] bg-skip-neutral-400 rounded-[20px] border border-white/8 p-2 flex flex-col relative overflow-hidden shadow-2xl">
      <div className="flex-1 bg-skip-neutral-350 rounded-xl p-4 flex flex-col justify-end relative overflow-hidden">
        {/* Top fade out for scroll effect */}
        <div
          className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-skip-neutral-350 to-transparent z-10"
          pointer-events="none"
        />

        {/* Chat History Placeholders */}
        <div className="flex flex-col gap-3 mb-5 w-full relative z-0 opacity-80">
          <div className="w-[65%] h-9 bg-skip-neutral-500 rounded-2xl rounded-tl-sm" />
          <div className="w-[45%] h-9 bg-skip-neutral-500 rounded-2xl rounded-tl-sm" />
        </div>

        {/* User Primary Bubble */}
        <div className="flex gap-3 items-end w-full max-w-[90%] ml-auto mb-4 relative z-10">
          <div className="bg-blue-violet-600 text-white p-3 sm:px-4 sm:py-3 rounded-2xl rounded-tr-sm font-body text-xs sm:text-sm shadow-md leading-relaxed">
            Crie um sistema de controle de ponto para minha equipe
          </div>
          <div className="w-8 h-8 rounded-full bg-skip-neutral-500 shrink-0 flex items-center justify-center overflow-hidden ring-2 ring-skip-neutral-350">
            <img
              src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* AI Typing Indicator */}
        <div className="flex gap-3 items-end w-full max-w-[80%] relative z-10">
          <div className="w-8 h-8 rounded-full bg-skip-neutral-500 shrink-0 flex items-center justify-center border border-skip-neutral-600 overflow-hidden shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-violet-400" />
          </div>
          <div className="bg-skip-neutral-500/40 px-3 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1.5 h-9 border border-skip-neutral-500/20 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-violet-400 animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-violet-400 animate-pulse [animation-delay:200ms]" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-violet-400 animate-pulse [animation-delay:400ms]" />
          </div>
        </div>
      </div>

      {/* Footer Input Field */}
      <div className="mt-2 w-full h-12 bg-skip-neutral-400 rounded-xl border border-skip-neutral-600 flex items-center px-4 justify-between text-skip-neutral-800 shrink-0">
        <span className="text-sm font-body">Descreva o que deseja criar...</span>
        <div className="w-8 h-8 bg-blue-violet-600 rounded-full flex items-center justify-center shrink-0 shadow-sm">
          <Send className="w-4 h-4 text-white -ml-0.5" />
        </div>
      </div>
    </div>
  )
}

export function Step2Mockup() {
  return (
    <div className="w-full h-[280px] bg-white rounded-xl border border-skip-neutral-1350 shadow-sm p-6 flex flex-col items-center justify-center relative overflow-hidden">
      <Loader2 className="w-10 h-10 text-blue-violet-600 animate-spin mb-6" />
      <div className="w-full max-w-xs space-y-4">
        <div className="flex justify-between text-sm font-body text-skip-neutral-800">
          <span>Construindo arquitetura...</span>
          <span className="text-blue-violet-600 font-medium">75%</span>
        </div>
        <Progress value={75} className="h-2" />
      </div>
      <div className="flex gap-4 mt-8 opacity-50">
        <div className="flex items-center gap-2 bg-skip-neutral-1450 px-3 py-1.5 rounded-md border border-skip-neutral-1300">
          <Database className="w-4 h-4" /> <span className="text-xs font-mono">schema.sql</span>
        </div>
        <div className="flex items-center gap-2 bg-skip-neutral-1450 px-3 py-1.5 rounded-md border border-skip-neutral-1300">
          <LayoutTemplate className="w-4 h-4" />{' '}
          <span className="text-xs font-mono">dashboard.tsx</span>
        </div>
      </div>
    </div>
  )
}

export function Step3Mockup() {
  return (
    <div className="w-full h-[280px] bg-white rounded-xl border border-skip-neutral-1350 shadow-sm flex overflow-hidden">
      <div className="w-1/3 border-r border-skip-neutral-1350 p-4 flex flex-col bg-skip-neutral-1500 hidden sm:flex">
        <div className="flex-1" />
        <div className="bg-blue-violet-50 border border-blue-violet-100 p-3 rounded-lg text-xs font-body text-blue-violet-900 mb-3">
          Adicione um campo de aprovação do gestor
        </div>
        <div className="h-8 bg-white rounded border border-skip-neutral-1300 flex items-center px-2">
          <span className="text-[10px] text-skip-neutral-800">Mensagem...</span>
        </div>
      </div>
      <div className="flex-1 p-4 bg-white relative">
        <div className="absolute inset-0 bg-blue-violet-600/5 z-0" />
        <div className="relative z-10 border border-blue-violet-200 rounded-lg p-4 bg-white shadow-sm ring-1 ring-blue-violet-500/20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-skip-neutral-100">Registro de Ponto</span>
            <div className="flex items-center gap-1 text-xs text-blue-violet-600 bg-blue-violet-50 px-2 py-1 rounded-full animate-pulse">
              <Sparkles className="w-3 h-3" /> Atualizando...
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-8 bg-skip-neutral-1400 rounded w-full" />
            <div className="h-8 bg-skip-neutral-1400 rounded w-full" />
            <div className="h-8 bg-blue-violet-100 rounded w-full border border-blue-violet-200 flex items-center px-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-violet-100 to-transparent animate-pulse" />
              <span className="text-xs text-blue-violet-800 font-medium relative z-10">
                Aprovação do Gestor
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Step4Mockup() {
  return (
    <div className="w-full h-[280px] bg-white rounded-xl border border-skip-neutral-1350 shadow-sm p-6 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-sm rounded-xl border border-skip-neutral-1350 shadow-lg bg-white overflow-hidden">
        <div className="h-12 bg-skip-neutral-1450 border-b border-skip-neutral-1350 flex items-center px-4 gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white border border-skip-neutral-1350 rounded-md px-3 py-1 flex items-center gap-2 text-xs font-mono text-skip-neutral-800 shadow-sm w-full max-w-[240px]">
              <Lock className="w-3 h-3 text-green-600" />
              <span className="truncate">suaempresa.skip.app</span>
            </div>
          </div>
        </div>
        <div className="p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
            <LinkIcon className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="font-heading font-semibold text-lg mb-2 text-skip-neutral-100">
            Sistema Online!
          </h4>
          <div className="flex items-center gap-2 bg-skip-neutral-1450 px-3 py-1 rounded-full border border-skip-neutral-1350">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-skip-neutral-800">SSL Ativo</span>
          </div>
        </div>
      </div>
    </div>
  )
}

import {
  Link as LinkIcon,
  Lock,
  Loader2,
  Sparkles,
  Send,
  Database,
  LayoutTemplate,
  Check,
  BarChart3,
  Users,
  Clock,
} from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

export function Step1Mockup() {
  return (
    <div className="w-full h-[320px] sm:h-[360px] bg-skip-neutral-400 rounded-[20px] border border-skip-neutral-600 flex flex-col relative overflow-hidden shadow-2xl">
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-end relative overflow-hidden bg-transparent">
        {/* Top fade out for scroll effect */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-skip-neutral-400 to-transparent z-10 pointer-events-none" />

        {/* Chat History Placeholders */}
        <div className="flex flex-col gap-4 mb-6 w-full relative z-0 opacity-80">
          <div className="w-[65%] h-10 sm:h-12 bg-skip-neutral-500 rounded-2xl rounded-tl-sm" />
          <div className="w-[45%] h-10 sm:h-12 bg-skip-neutral-500 rounded-2xl rounded-tl-sm" />
        </div>

        {/* User Primary Bubble */}
        <div className="flex gap-3 sm:gap-4 items-end w-full max-w-[90%] ml-auto mb-5 relative z-10">
          <div className="bg-blue-violet-600 text-white p-3 sm:px-5 sm:py-3.5 rounded-2xl rounded-tr-sm font-body text-xs sm:text-sm shadow-md leading-relaxed">
            Crie um sistema de controle de ponto para minha equipe
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-skip-neutral-500 shrink-0 flex items-center justify-center overflow-hidden ring-2 ring-skip-neutral-400">
            <img
              src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* AI Typing Indicator */}
        <div className="flex gap-3 sm:gap-4 items-end w-full max-w-[80%] relative z-10">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-skip-neutral-500 shrink-0 flex items-center justify-center border border-skip-neutral-600 overflow-hidden shadow-sm">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-violet-400" />
          </div>
          <div className="bg-skip-neutral-500/40 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl rounded-tl-sm flex items-center gap-1.5 h-10 sm:h-12 border border-skip-neutral-500/20 shadow-sm">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-violet-400 animate-pulse" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-violet-400 animate-pulse [animation-delay:200ms]" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-violet-400 animate-pulse [animation-delay:400ms]" />
          </div>
        </div>
      </div>

      {/* Footer Input Field */}
      <div className="p-4 sm:p-6 shrink-0 bg-transparent pt-2 sm:pt-2">
        <div className="w-full h-12 sm:h-14 bg-skip-neutral-500/50 rounded-xl border border-skip-neutral-600 flex items-center px-4 sm:px-5 justify-between text-skip-neutral-800 shrink-0">
          <span className="text-sm font-body">Descreva o que deseja criar...</span>
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-violet-600 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105">
            <Send className="w-4 h-4 sm:w-4 sm:h-4 text-white -ml-0.5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Step2Mockup() {
  return (
    <div className="w-full h-[320px] sm:h-[360px] bg-skip-neutral-400 rounded-[20px] border border-skip-neutral-600 flex relative overflow-hidden shadow-2xl">
      {/* Left Pane: Terminal / Building Process */}
      <div className="w-[35%] sm:w-[40%] border-r border-skip-neutral-600 flex flex-col p-4 sm:p-5 bg-skip-neutral-400 relative z-10 shrink-0">
        <div className="flex items-center gap-1.5 mb-6">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
        </div>

        <div className="flex-1 flex flex-col gap-3 font-mono text-[10px] sm:text-xs text-skip-neutral-1300">
          <div className="flex items-center gap-2">
            <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 text-green-400/80" />
            <span className="truncate">Requisitos analisados</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 text-green-400/80" />
            <span className="truncate">Banco de dados criado</span>
          </div>
          <div className="flex items-center gap-2">
            <Loader2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-spin shrink-0 text-blue-violet-400" />
            <span className="truncate">Gerando interface...</span>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-skip-neutral-600/50">
          <div className="flex justify-between text-[10px] sm:text-xs font-mono text-skip-neutral-1300 mb-2">
            <span>Progresso</span>
            <span className="text-blue-violet-400">80%</span>
          </div>
          <Progress
            value={80}
            className="h-1 sm:h-1.5 bg-skip-neutral-600 [&>div]:bg-blue-violet-500"
          />
        </div>
      </div>

      {/* Right Pane: Dashboard Live Preview */}
      <div className="flex-1 bg-skip-neutral-300 relative flex overflow-hidden">
        {/* Dark Sidebar */}
        <div className="w-12 sm:w-16 bg-skip-neutral-400 border-r border-skip-neutral-500 flex flex-col items-center py-4 gap-4 z-10 shrink-0">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-blue-violet-600 flex items-center justify-center mb-2 shadow-sm">
            <LayoutTemplate className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-skip-neutral-500/50 flex items-center justify-center text-white">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-skip-neutral-500/50 flex items-center justify-center text-white">
            <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-skip-neutral-500/50 flex items-center justify-center text-white mt-auto">
            <Database className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden relative z-0">
          {/* Mock Header */}
          <div className="h-10 sm:h-12 border-b border-skip-neutral-500 flex items-center px-4 justify-between bg-skip-neutral-400/30 backdrop-blur-sm shrink-0">
            <div className="w-24 h-3 bg-skip-neutral-500 rounded" />
            <div className="w-6 h-6 rounded-full bg-skip-neutral-600 border border-skip-neutral-500 flex items-center justify-center overflow-hidden">
              <img
                src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=2"
                alt="User"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          <div className="flex-1 p-3 sm:p-5 flex flex-col gap-3 sm:gap-4 overflow-hidden">
            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 shrink-0">
              <div className="bg-skip-neutral-400 rounded-lg p-2.5 sm:p-3 border border-skip-neutral-500 flex flex-col shadow-sm">
                <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2">
                  <BarChart3 className="w-3 h-3 text-blue-violet-400" />
                  <span className="text-[8px] sm:text-[10px] text-skip-neutral-1000 truncate font-medium">
                    Entradas Hoje
                  </span>
                </div>
                <div className="text-sm sm:text-lg font-bold text-white">142</div>
              </div>
              <div className="bg-skip-neutral-400 rounded-lg p-2.5 sm:p-3 border border-skip-neutral-500 flex flex-col shadow-sm">
                <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2">
                  <Users className="w-3 h-3 text-green-400" />
                  <span className="text-[8px] sm:text-[10px] text-skip-neutral-1000 truncate font-medium">
                    Presentes
                  </span>
                </div>
                <div className="text-sm sm:text-lg font-bold text-white">138</div>
              </div>
              <div className="bg-skip-neutral-400 rounded-lg p-2.5 sm:p-3 border border-skip-neutral-500 flex flex-col shadow-sm">
                <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2">
                  <Clock className="w-3 h-3 text-red-400" />
                  <span className="text-[8px] sm:text-[10px] text-skip-neutral-1000 truncate font-medium">
                    Atrasos
                  </span>
                </div>
                <div className="text-sm sm:text-lg font-bold text-white">4</div>
              </div>
            </div>

            {/* Table Area */}
            <div className="flex-1 bg-skip-neutral-400 rounded-lg border border-skip-neutral-500 overflow-hidden flex flex-col shadow-sm min-h-[120px]">
              <div className="grid grid-cols-[1fr_auto_auto] gap-2 p-2 sm:p-3 border-b border-skip-neutral-500 bg-skip-neutral-500/20">
                <div className="text-[8px] sm:text-[10px] text-skip-neutral-1200 font-medium uppercase tracking-wider">
                  Nome
                </div>
                <div className="text-[8px] sm:text-[10px] text-skip-neutral-1200 font-medium w-12 text-center uppercase tracking-wider">
                  Horário
                </div>
                <div className="text-[8px] sm:text-[10px] text-skip-neutral-1200 font-medium w-16 text-center uppercase tracking-wider">
                  Status
                </div>
              </div>
              <div className="p-2 sm:p-3 flex flex-col gap-2.5">
                {[
                  { nameW: '80%', time: '08:00', status: 'Ativo', statusColor: 'green' },
                  { nameW: '65%', time: '08:15', status: 'Ativo', statusColor: 'green' },
                  { nameW: '90%', time: '09:30', status: 'Atraso', statusColor: 'red' },
                  { nameW: '75%', time: '09:45', status: 'Atraso', statusColor: 'red' },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto_auto] gap-2 items-center group">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-skip-neutral-500/50 shrink-0 flex items-center justify-center overflow-hidden">
                        <img
                          src={`https://img.usecurling.com/ppl/thumbnail?gender=${i % 2 === 0 ? 'female' : 'male'}&seed=${i + 5}`}
                          alt="Avatar"
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <div className="h-2 bg-white rounded" style={{ width: row.nameW }} />
                    </div>
                    <div className="text-[8px] sm:text-[10px] text-white font-mono w-12 text-center">
                      {row.time}
                    </div>
                    <div className="w-16 flex justify-center">
                      <span
                        className={cn(
                          'inline-flex px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-medium border',
                          row.statusColor === 'green'
                            ? 'bg-green-500/10 text-green-400 border-green-500/20'
                            : 'bg-red-500/10 text-red-400 border-red-500/20',
                        )}
                      >
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

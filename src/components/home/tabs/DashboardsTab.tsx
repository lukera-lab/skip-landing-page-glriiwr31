import {
  X,
  Check,
  TrendingUp,
  TrendingDown,
  LayoutDashboard,
  Database,
  PieChart,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const ANTES_POINTS = [
  'Informações fragmentadas e perdidas',
  'Dependência de múltiplas ferramentas',
  'Desconfiança nos dados reportados',
]

const DEPOIS_POINTS = [
  'Eliminação de múltiplas ferramentas',
  'Tomada de decisão 3-5x mais rápida',
  'Confiabilidade dos dados do negócio',
]

export function DashboardsAntes() {
  return (
    <div className="flex flex-col flex-1 w-full h-full animate-fade-in gap-6">
      {/* Visual Mockup */}
      <div className="h-[280px] w-full border border-skip-neutral-1350 rounded-lg bg-skip-neutral-1450/50 p-4 flex flex-col shadow-inner relative overflow-hidden flex-shrink-0">
        {/* CRM Window */}
        <div className="absolute top-2 left-2 right-12 h-32 bg-white rounded-md border border-skip-neutral-1300 shadow-md rotate-[-2deg] flex flex-col overflow-hidden opacity-95 z-10 transition-transform hover:rotate-0 hover:z-40">
          <div className="bg-blue-600 p-1.5 flex items-center gap-2 text-white">
            <div className="w-4 h-4 rounded bg-white/20 flex items-center justify-center">
              <Database className="w-2.5 h-2.5" />
            </div>
            <span className="text-[10px] font-medium">CRM Cloud</span>
          </div>
          <div className="p-3 flex-1 flex flex-col gap-2">
            <div className="text-[10px] text-skip-neutral-500 font-medium">Receita Q3</div>
            <div className="text-lg font-bold text-skip-neutral-800">
              R$ 1.2M <span className="text-[10px] text-green-500 font-normal ml-1">+12%</span>
            </div>
          </div>
        </div>

        {/* Spreadsheet Window */}
        <div className="absolute top-16 left-8 right-4 h-36 bg-white rounded-md border border-skip-neutral-1300 shadow-lg rotate-[3deg] flex flex-col overflow-hidden z-20 transition-transform hover:rotate-0 hover:z-40">
          <div className="bg-green-600 p-1.5 flex items-center gap-2 text-white">
            <div className="w-4 h-4 rounded bg-white/20 flex items-center justify-center font-serif text-[10px] font-bold">
              X
            </div>
            <span className="text-[10px] font-medium">Financeiro_Final_v4.xlsx</span>
          </div>
          <div className="p-2 flex-1 flex flex-col">
            <table className="w-full text-left text-[9px] border-collapse">
              <thead>
                <tr className="border-b border-skip-neutral-1300 text-skip-neutral-500">
                  <th className="p-1 font-medium">Mês</th>
                  <th className="p-1 font-medium text-right">Faturamento</th>
                </tr>
              </thead>
              <tbody className="text-skip-neutral-700">
                <tr className="border-b border-skip-neutral-1300 bg-red-50">
                  <td className="p-1 text-red-600">Julho</td>
                  <td className="p-1 text-right text-red-600 font-medium">R$ 890k (ERRO)</td>
                </tr>
                <tr className="border-b border-skip-neutral-1300">
                  <td className="p-1">Agosto</td>
                  <td className="p-1 text-right">R$ 950k</td>
                </tr>
                <tr>
                  <td className="p-1">Total Q3</td>
                  <td className="p-1 text-right font-bold text-red-500">!= REF</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Analytics Window */}
        <div className="absolute bottom-2 left-4 right-10 h-28 bg-white rounded-md border border-skip-neutral-1300 shadow-xl rotate-[-1deg] flex flex-col overflow-hidden z-30 transition-transform hover:rotate-0 hover:z-40">
          <div className="bg-orange-500 p-1.5 flex items-center gap-2 text-white">
            <div className="w-4 h-4 rounded bg-white/20 flex items-center justify-center">
              <PieChart className="w-2.5 h-2.5" />
            </div>
            <span className="text-[10px] font-medium">Web Analytics</span>
          </div>
          <div className="p-3 flex-1 flex items-center justify-between">
            <div className="flex flex-col">
              <div className="text-[10px] text-skip-neutral-500 font-medium">Conversão</div>
              <div className="text-lg font-bold text-skip-neutral-800">2.4%</div>
              <div className="text-[9px] text-red-500 flex items-center mt-0.5">
                <TrendingDown className="w-2 h-2 mr-0.5" /> -0.8%
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border-4 border-orange-100 border-t-orange-500 border-r-orange-500" />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-mono-xs uppercase text-blue-violet-600 text-[10px] tracking-wider font-semibold font-mono">
            Processo Padrão
          </span>
          <h3 className="text-xl font-heading font-semibold text-skip-neutral-100">
            Múltiplos dashboards descentralizados
          </h3>
        </div>
        <ul className="space-y-3">
          {ANTES_POINTS.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="rounded-full bg-red-50 p-1 shrink-0 mt-0.5">
                <X className="w-3 h-3 text-red-400" />
              </div>
              <span className="text-sm text-skip-neutral-600 leading-tight">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function DashboardsDepois() {
  return (
    <div className="flex flex-col flex-1 w-full h-full animate-fade-in gap-6">
      {/* Visual Mockup */}
      <div className="h-[280px] w-full rounded-xl border border-blue-violet-100 shadow-sm flex flex-col overflow-hidden flex-shrink-0">
        <div className="flex-1 bg-gradient-to-b from-white to-blue-violet-50 p-3 sm:p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-skip-neutral-1350 pb-2 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-blue-violet-600 text-white flex items-center justify-center shadow-sm">
                <LayoutDashboard className="w-3 h-3" />
              </div>
              <span className="text-xs font-semibold text-skip-neutral-800">
                Executive Overview
              </span>
            </div>
            <div className="flex gap-1">
              <Badge variant="outline" className="text-[9px] h-4 px-1.5 py-0 font-medium bg-white">
                Q3 2024
              </Badge>
              <Badge
                variant="outline"
                className="text-[9px] h-4 px-1.5 py-0 font-medium bg-green-50 text-green-700 border-green-200"
              >
                Live
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 shrink-0">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2.5 flex flex-col border border-skip-neutral-1350 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-blue-50 rounded-bl-full -z-0" />
              <span className="text-[9px] text-skip-neutral-500 uppercase tracking-wider font-medium z-10">
                Receita Global
              </span>
              <div className="flex items-end gap-1 mt-1 z-10">
                <span className="text-sm font-bold text-skip-neutral-800">R$ 3.2M</span>
                <span className="text-[8px] text-green-600 font-medium mb-0.5 flex items-center">
                  <TrendingUp className="w-2 h-2 mr-0.5" /> 24%
                </span>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2.5 flex flex-col border border-skip-neutral-1350 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-purple-50 rounded-bl-full -z-0" />
              <span className="text-[9px] text-skip-neutral-500 uppercase tracking-wider font-medium z-10">
                Margem
              </span>
              <div className="flex items-end gap-1 mt-1 z-10">
                <span className="text-sm font-bold text-skip-neutral-800">28.4%</span>
                <span className="text-[8px] text-green-600 font-medium mb-0.5 flex items-center">
                  <TrendingUp className="w-2 h-2 mr-0.5" /> 4.2%
                </span>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2.5 flex flex-col border border-skip-neutral-1350 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-orange-50 rounded-bl-full -z-0" />
              <span className="text-[9px] text-skip-neutral-500 uppercase tracking-wider font-medium z-10">
                CAC
              </span>
              <div className="flex items-end gap-1 mt-1 z-10">
                <span className="text-sm font-bold text-skip-neutral-800">R$ 450</span>
                <span className="text-[8px] text-green-600 font-medium mb-0.5 flex items-center">
                  <TrendingDown className="w-2 h-2 mr-0.5" /> 12%
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-skip-neutral-1350 shadow-sm flex flex-col flex-1 p-3 min-h-[100px]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-medium text-skip-neutral-800">Crescimento MRR</span>
              <div className="flex gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-violet-500" />
                  <span className="text-[8px] text-skip-neutral-500">Real</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-skip-neutral-1300" />
                  <span className="text-[8px] text-skip-neutral-500">Meta</span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-end justify-between gap-1 mt-auto h-full pb-1 relative">
              {[
                { h1: '40%', h2: '45%' },
                { h1: '55%', h2: '50%' },
                { h1: '65%', h2: '60%' },
                { h1: '70%', h2: '70%' },
                { h1: '85%', h2: '80%' },
              ].map((val, i) => (
                <div
                  key={i}
                  className="flex gap-0.5 w-full justify-center z-10 h-full items-end group"
                >
                  <div
                    className="w-1/3 max-w-[12px] bg-blue-violet-500 rounded-t-sm transition-all duration-300 group-hover:bg-blue-violet-400 group-hover:w-1/2"
                    style={{ height: val.h1 }}
                  />
                  <div
                    className="w-1/3 max-w-[12px] bg-skip-neutral-1300 rounded-t-sm transition-all duration-300 group-hover:w-1/2"
                    style={{ height: val.h2 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-mono-xs uppercase text-blue-violet-600 text-[10px] tracking-wider font-semibold font-mono">
            Sistema Skip
          </span>
          <h3 className="text-xl font-heading font-semibold text-skip-neutral-100">
            Central de Inteligência
          </h3>
        </div>
        <ul className="space-y-3">
          {DEPOIS_POINTS.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="rounded-full bg-blue-violet-50 p-1 shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-blue-violet-400" />
              </div>
              <span className="text-sm text-skip-neutral-600 leading-tight">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

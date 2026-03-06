import { X, Check, AlertCircle, FileSpreadsheet, Table } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const ANTES_POINTS = [
  'Erros Manuais Constantes',
  'Complexidade (múltiplas abas e arquivos)',
  'Ruptura por falta de previsão',
]

const DEPOIS_POINTS = [
  'Automação Elimina Erros Manuais',
  'Rastreabilidade Completa (logs)',
  'Alertas e relatórios em Tempo Real',
]

export function InventoryAntes() {
  return (
    <div className="flex flex-col flex-1 w-full h-full animate-fade-in gap-6">
      {/* Visual Mockup */}
      <div className="h-[280px] w-full border border-skip-neutral-1350 rounded-lg bg-skip-neutral-1450/50 p-4 relative overflow-hidden flex-shrink-0 shadow-inner">
        {/* Spreadsheet 1 */}
        <div className="absolute top-4 left-4 right-10 h-40 bg-white rounded-md border border-skip-neutral-1300 shadow-md rotate-[-2deg] flex flex-col overflow-hidden opacity-95 z-10 hover:rotate-0 hover:z-40 transition-transform">
          <div className="bg-green-600 p-1.5 flex items-center gap-2 text-white">
            <Table className="w-3 h-3" />
            <span className="text-[10px] font-medium">Controle_Estoque_FINAL.xlsx</span>
          </div>
          <div className="p-2 flex-1 flex flex-col bg-white">
            <table className="w-full text-left text-[9px] border-collapse">
              <thead>
                <tr className="border-b border-skip-neutral-1300 text-skip-neutral-500">
                  <th className="p-1 font-medium">Produto</th>
                  <th className="p-1 font-medium text-right">Qtd</th>
                  <th className="p-1 font-medium text-right">Min</th>
                </tr>
              </thead>
              <tbody className="text-skip-neutral-700">
                <tr className="border-b border-skip-neutral-1300">
                  <td className="p-1">Parafuso Sextavado</td>
                  <td className="p-1 text-right">12</td>
                  <td className="p-1 text-right">50</td>
                </tr>
                <tr className="border-b border-skip-neutral-1300 bg-red-50">
                  <td className="p-1 text-red-600 font-medium">#REF!</td>
                  <td className="p-1 text-right text-red-600 font-medium">#VALOR!</td>
                  <td className="p-1 text-right text-red-600">100</td>
                </tr>
                <tr className="border-b border-skip-neutral-1300">
                  <td className="p-1">Porca M8</td>
                  <td className="p-1 text-right">145</td>
                  <td className="p-1 text-right">150</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Spreadsheet 2 */}
        <div className="absolute top-24 left-12 right-2 h-36 bg-white rounded-md border border-skip-neutral-1300 shadow-lg rotate-[3deg] flex flex-col overflow-hidden z-20 hover:rotate-0 hover:z-40 transition-transform">
          <div className="bg-yellow-500 p-1.5 flex items-center gap-2 text-white">
            <FileSpreadsheet className="w-3 h-3" />
            <span className="text-[10px] font-medium">Fornecedores_v2.csv</span>
          </div>
          <div className="p-2 flex-1 flex flex-col bg-white">
            <table className="w-full text-left text-[9px] border-collapse">
              <thead>
                <tr className="border-b border-skip-neutral-1300 text-skip-neutral-500">
                  <th className="p-1 font-medium">Cód</th>
                  <th className="p-1 font-medium">Fornecedor</th>
                  <th className="p-1 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody className="text-skip-neutral-700">
                <tr className="border-b border-skip-neutral-1300">
                  <td className="p-1">PR-01</td>
                  <td className="p-1">M-Corp</td>
                  <td className="p-1 text-right text-red-500 font-medium">Falta</td>
                </tr>
                <tr>
                  <td className="p-1 font-medium text-orange-500">ERRO_SINC</td>
                  <td className="p-1 text-orange-500">#N/A</td>
                  <td className="p-1 text-right text-orange-500">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-mono-xs uppercase text-blue-violet-600 text-[10px] tracking-wider font-semibold font-mono">
            Processo Padrão
          </span>
          <h3 className="text-lg md:text-xl font-heading font-semibold text-skip-neutral-100">
            Controle de Inventário em Planilhas
          </h3>
        </div>
        <ul className="space-y-3">
          {ANTES_POINTS.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="rounded-full bg-red-50 p-1 shrink-0 mt-0.5">
                <X className="w-3 h-3 text-red-400" />
              </div>
              <span className="text-sm text-skip-neutral-900 leading-tight">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Sparkline({ data }: { data: number[] }) {
  const min = Math.min(...data),
    range = Math.max(...data) - min || 1
  const points = data
    .map((d, i) => `${(i / (data.length - 1)) * 36},${12 - ((d - min) / range) * 12}`)
    .join(' ')
  return (
    <svg width="36" height="12" className="overflow-visible">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
        className="text-blue-violet-400"
      />
    </svg>
  )
}

const DEPOIS_ROWS = [
  {
    prod: 'Parafuso Sextavado',
    est: '12',
    max: '50',
    status: 'Repor',
    badge: 'bg-[#FEF2F2] text-red-700 border-red-100',
    sparkline: [20, 18, 15, 14, 12],
  },
  {
    prod: 'Porca M8',
    est: '145',
    max: '150',
    status: 'Atenção',
    badge: 'bg-orange-50 text-orange-700 border-orange-200',
    sparkline: [150, 148, 147, 146, 145],
  },
  {
    prod: 'Arruela Lisa',
    est: '890',
    max: '200',
    status: 'Saudável',
    badge: 'bg-green-50 text-green-700 border-green-100',
    sparkline: [850, 860, 875, 880, 890],
  },
]

export function InventoryDepois() {
  return (
    <div className="flex flex-col flex-1 w-full h-full animate-fade-in gap-6">
      {/* Visual Mockup */}
      <div className="h-[280px] w-full rounded-xl border border-blue-violet-100 shadow-sm flex flex-col overflow-hidden flex-shrink-0">
        <div className="flex-1 bg-gradient-to-b from-white to-blue-violet-50 p-3 sm:p-4 flex flex-col gap-4 overflow-hidden">
          <div className="grid grid-cols-3 gap-2 shrink-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2.5 flex flex-col border border-skip-neutral-1350 shadow-sm">
              <span className="text-[10px] text-skip-neutral-800 uppercase tracking-wider font-medium">
                Itens
              </span>
              <span className="text-lg font-semibold text-skip-neutral-400">247</span>
            </div>
            <div className="bg-[#FEF2F2] rounded-lg p-2.5 flex flex-col border border-red-100 shadow-sm">
              <span className="text-[10px] text-red-600 uppercase tracking-wider font-medium flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Alertas
              </span>
              <span className="text-lg font-semibold text-red-700">3</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2.5 flex flex-col border border-skip-neutral-1350 shadow-sm">
              <span className="text-[10px] text-skip-neutral-800 uppercase tracking-wider font-medium">
                Rupturas
              </span>
              <span className="text-lg font-semibold text-skip-neutral-400">0</span>
            </div>
          </div>
          <div className="text-[11px] w-full border border-skip-neutral-1350 rounded-lg overflow-x-auto shadow-sm flex-1 bg-white flex flex-col min-h-0">
            <div className="flex-1 overflow-y-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap min-w-max">
                <thead>
                  <tr className="bg-skip-neutral-1450 border-b border-skip-neutral-1350 text-skip-neutral-600 sticky top-0 z-10">
                    <th className="p-2.5 font-medium">Produto</th>
                    <th className="p-2.5 font-medium text-right">Estoque</th>
                    <th className="p-2.5 font-medium text-center">Status</th>
                    <th className="p-2.5 font-medium text-right">Tendência</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-skip-neutral-500">
                  {DEPOIS_ROWS.map((r, i) => (
                    <tr key={i} className="border-b border-skip-neutral-1350 last:border-0">
                      <td className="p-2.5 font-medium text-skip-neutral-400">{r.prod}</td>
                      <td className="p-2.5 text-right">
                        {r.est} <span className="text-skip-neutral-800">/ {r.max}</span>
                      </td>
                      <td className="p-2.5 text-center">
                        <Badge
                          variant="outline"
                          className={`text-[9px] h-5 px-2 font-medium ${r.badge}`}
                        >
                          {r.status}
                        </Badge>
                      </td>
                      <td className="p-2.5 flex justify-end items-center h-full">
                        <Sparkline data={r.sparkline} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
          <h3 className="text-lg md:text-xl font-heading font-semibold text-skip-neutral-100">
            Inventory OS
          </h3>
        </div>
        <ul className="space-y-3">
          {DEPOIS_POINTS.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="rounded-full bg-blue-violet-50 p-1 shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-blue-violet-400" />
              </div>
              <span className="text-sm text-skip-neutral-900 leading-tight">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

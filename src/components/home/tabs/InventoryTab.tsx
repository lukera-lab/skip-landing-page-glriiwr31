import { X, Check, AlertCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const ANTES_ROWS = [
  {
    id: 1,
    prod: 'Parafuso Sextavado',
    cod: 'PR-01',
    qtd: '12',
    min: '50',
    forn: 'M-Corp',
    status: 'Falta',
    isError: true,
  },
  {
    id: 2,
    prod: 'Porca M8',
    cod: 'PO-08',
    qtd: '145',
    min: '150',
    forn: 'Fer A',
    status: 'Atenção',
  },
  {
    id: 3,
    prod: 'Arruela Lisa',
    cod: 'AR-02',
    qtd: '890',
    min: '200',
    forn: 'M-Corp',
    status: 'OK',
  },
  {
    id: 4,
    prod: '#REF!',
    cod: 'CB-12',
    qtd: '#VALOR!',
    min: '100',
    forn: '#N/A',
    status: 'ERRO',
    isRowError: true,
  },
  {
    id: 5,
    prod: 'Dobradiça 35mm',
    cod: 'DB-35',
    qtd: '45',
    min: '50',
    forn: 'DobrasBR',
    status: 'Comprar',
  },
]

export function InventoryAntes() {
  const points = [
    'Erros Manuais Constantes',
    'Complexidade (múltiplas abas, arquivos, gambiarras)',
    'Ruptura por falta de previsão (planilha mostra saldo, não tendência)',
  ]

  return (
    <div className="flex flex-col flex-1 w-full h-full animate-fade-in">
      <div className="mb-6 shrink-0">
        <h3 className="text-lg font-semibold text-skip-neutral-400">Processo Padrão</h3>
        <p className="text-base text-skip-neutral-800">Controle de Inventário em Planilhas</p>
      </div>
      <ul className="space-y-3 mb-8 shrink-0">
        {points.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-red-50 p-1 shrink-0">
              <X className="w-3 h-3 text-red-400" />
            </div>
            <span className="text-sm text-skip-neutral-600 leading-tight">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex-1 border border-skip-neutral-1350 rounded-lg bg-white overflow-hidden text-[10px] flex flex-col shadow-sm min-h-0">
        <div className="flex-1 overflow-x-auto overflow-y-hidden flex flex-col">
          <table className="w-full text-left border-collapse whitespace-nowrap min-w-max h-full">
            <thead>
              <tr className="bg-skip-neutral-1450 border-b border-skip-neutral-1350 text-skip-neutral-600 h-8">
                <th className="border-r border-skip-neutral-1350 p-1.5 font-normal w-6 text-center"></th>
                <th className="border-r border-skip-neutral-1350 p-1.5 font-normal">Produto</th>
                <th className="border-r border-skip-neutral-1350 p-1.5 font-normal">Cód</th>
                <th className="border-r border-skip-neutral-1350 p-1.5 font-normal text-right">
                  Qtd
                </th>
                <th className="border-r border-skip-neutral-1350 p-1.5 font-normal text-right">
                  Est. Min
                </th>
                <th className="border-r border-skip-neutral-1350 p-1.5 font-normal">Fornecedor</th>
                <th className="p-1.5 font-normal">Status</th>
              </tr>
            </thead>
            <tbody className="text-skip-neutral-500 flex-1">
              {ANTES_ROWS.map((r) => {
                const rowBg = r.isRowError ? 'bg-[#FEF2F2]' : 'bg-white'
                const errCell =
                  r.isError || r.isRowError ? 'bg-[#FEF2F2] text-red-600 font-medium' : ''

                return (
                  <tr key={r.id} className={`border-b border-skip-neutral-1350 ${rowBg} h-8`}>
                    <td className="border-r border-skip-neutral-1350 p-1.5 bg-skip-neutral-1450 text-center text-skip-neutral-800">
                      {r.id}
                    </td>
                    <td
                      className={`border-r border-skip-neutral-1350 p-1.5 ${r.prod === '#REF!' ? 'text-red-500 font-mono' : ''}`}
                    >
                      {r.prod}
                    </td>
                    <td className="border-r border-skip-neutral-1350 p-1.5">{r.cod}</td>
                    <td
                      className={`border-r border-skip-neutral-1350 p-1.5 text-right ${errCell} ${r.qtd === '#VALOR!' ? 'text-red-500 font-mono' : ''}`}
                    >
                      {r.qtd}
                    </td>
                    <td className="border-r border-skip-neutral-1350 p-1.5 text-right">{r.min}</td>
                    <td className="border-r border-skip-neutral-1350 p-1.5 text-skip-neutral-800">
                      {r.forn}
                    </td>
                    <td
                      className={`p-1.5 ${r.isError || r.isRowError ? 'text-red-600 font-medium' : 'text-skip-neutral-600'}`}
                    >
                      {r.status}
                    </td>
                  </tr>
                )
              })}
              <tr className="h-full bg-white">
                <td className="border-r border-skip-neutral-1350 bg-skip-neutral-1450"></td>
                <td className="border-r border-skip-neutral-1350"></td>
                <td className="border-r border-skip-neutral-1350"></td>
                <td className="border-r border-skip-neutral-1350"></td>
                <td className="border-r border-skip-neutral-1350"></td>
                <td className="border-r border-skip-neutral-1350"></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-skip-neutral-1450 border-t border-skip-neutral-1350 flex overflow-x-auto no-scrollbar shrink-0">
          {['Plan1', 'Backup', 'FINAL_v3', 'NÃO MEXER'].map((t, i) => (
            <div
              key={t}
              className={`px-3 py-1.5 border-r border-skip-neutral-1350 whitespace-nowrap ${i === 2 ? 'bg-white font-medium text-skip-neutral-400 border-b-2 border-b-skip-neutral-1100' : 'text-skip-neutral-800'}`}
            >
              {t}
            </div>
          ))}
        </div>
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
  const points = [
    'Automação Elimina Erros Manuais',
    'Rastreabilidade Completa: quem fez o quê e quando',
    'Alertas e relatórios em Tempo Real',
  ]

  return (
    <div className="flex flex-col flex-1 w-full h-full animate-fade-in">
      <div className="mb-6 shrink-0">
        <h3 className="text-lg font-semibold text-skip-neutral-400">Sistema Skip</h3>
        <p className="text-base text-blue-violet-500">Inventory OS</p>
      </div>
      <ul className="space-y-3 mb-8 shrink-0">
        {points.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-blue-violet-50 p-1 shrink-0">
              <Check className="w-3 h-3 text-blue-violet-400" />
            </div>
            <span className="text-sm text-skip-neutral-600 leading-tight">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex-1 rounded-xl border border-blue-violet-100 shadow-sm flex flex-col min-h-0 overflow-hidden">
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
    </div>
  )
}

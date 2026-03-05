import { X, Check, TrendingDown, TrendingUp, AlertCircle } from 'lucide-react'
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
    eBg: 'bg-red-100 text-red-700 font-medium',
  },
  {
    id: 2,
    prod: 'Porca M8',
    cod: 'PO-08',
    qtd: '145',
    min: '150',
    forn: 'Fer A',
    status: 'Atenção',
    wBg: 'bg-yellow-100',
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
    rowErr: true,
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

const DEPOIS_ROWS = [
  {
    prod: 'Parafuso Sextavado',
    est: '12',
    max: '50',
    status: 'Repor Urgente',
    badge: 'bg-red-50 text-red-600 border-red-200',
    trend: 'down',
    tc: 'text-red-500',
  },
  {
    prod: 'Porca M8',
    est: '145',
    max: '150',
    status: 'Atenção',
    badge: 'bg-yellow-50 text-yellow-600 border-yellow-200',
    trend: 'down',
    tc: 'text-yellow-500',
  },
  {
    prod: 'Arruela Lisa',
    est: '890',
    max: '200',
    status: 'Saudável',
    badge: 'bg-green-50 text-green-600 border-green-200',
    trend: 'up',
    tc: 'text-green-500',
  },
]

export function InventoryAntes() {
  const points = [
    'Erros Manuais Constantes',
    'Complexidade (múltiplas abas, arquivos, gambiarras)',
    'Ruptura por falta de previsão (planilha mostra saldo, não tendência)',
  ]

  return (
    <div className="flex flex-col flex-1 w-full animate-fade-in">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-skip-neutral-900">Processo Padrão</h3>
        <p className="text-base text-skip-neutral-500">Controle de Inventário em Planilhas</p>
      </div>
      <ul className="space-y-3 mb-8">
        {points.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-red-100 p-1 shrink-0">
              <X className="w-3 h-3 text-red-600" />
            </div>
            <span className="text-sm text-skip-neutral-700 leading-tight">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto border border-skip-neutral-200 rounded-md bg-white overflow-hidden text-[10px] flex flex-col shadow-sm">
        <div className="bg-skip-neutral-100 border-b border-skip-neutral-200 flex items-center px-2 py-1 gap-2 text-skip-neutral-500 font-mono">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <span>inventario_final_v3.xlsx</span>
        </div>
        <div className="flex-1 overflow-x-auto overflow-y-hidden">
          <table className="w-full text-left border-collapse whitespace-nowrap min-w-max">
            <thead>
              <tr className="bg-skip-neutral-50 border-b border-skip-neutral-200 text-skip-neutral-600">
                <th className="border-r border-skip-neutral-200 p-1 font-normal w-6 text-center"></th>
                <th className="border-r border-skip-neutral-200 p-1 font-normal">Produto</th>
                <th className="border-r border-skip-neutral-200 p-1 font-normal">Cód</th>
                <th className="border-r border-skip-neutral-200 p-1 font-normal text-right">Qtd</th>
                <th className="border-r border-skip-neutral-200 p-1 font-normal text-right">
                  Est. Min
                </th>
                <th className="border-r border-skip-neutral-200 p-1 font-normal">Fornecedor</th>
                <th className="p-1 font-normal">Status</th>
              </tr>
            </thead>
            <tbody className="text-skip-neutral-800">
              {ANTES_ROWS.map((r) => (
                <tr
                  key={r.id}
                  className={`border-b border-skip-neutral-100 ${r.rowErr ? 'bg-red-50/50' : ''}`}
                >
                  <td className="border-r border-skip-neutral-200 p-1 bg-skip-neutral-50 text-center text-skip-neutral-400">
                    {r.id}
                  </td>
                  <td
                    className={`border-r border-skip-neutral-200 p-1 ${r.prod === '#REF!' ? 'text-red-500 font-mono' : ''}`}
                  >
                    {r.prod}
                  </td>
                  <td className="border-r border-skip-neutral-200 p-1">{r.cod}</td>
                  <td
                    className={`border-r border-skip-neutral-200 p-1 text-right ${r.eBg || ''} ${r.qtd === '#VALOR!' ? 'text-red-500 font-mono' : ''}`}
                  >
                    {r.qtd}
                  </td>
                  <td className={`border-r border-skip-neutral-200 p-1 text-right ${r.wBg || ''}`}>
                    {r.min}
                  </td>
                  <td className="border-r border-skip-neutral-200 p-1 text-skip-neutral-500">
                    {r.forn}
                  </td>
                  <td
                    className={`p-1 ${['Falta', 'ERRO'].includes(r.status) ? 'text-red-600 font-medium' : ['Atenção', 'Comprar'].includes(r.status) ? 'text-yellow-600 font-medium' : 'text-green-600 font-medium'}`}
                  >
                    {r.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-skip-neutral-100 border-t border-skip-neutral-200 flex overflow-x-auto no-scrollbar">
          {['Plan1', 'Backup', 'FINAL_v3', 'NÃO MEXER'].map((t, i) => (
            <div
              key={t}
              className={`px-3 py-1.5 border-r border-skip-neutral-200 whitespace-nowrap ${i === 2 ? 'bg-white font-medium text-skip-neutral-900 border-b-2 border-b-blue-500' : 'text-skip-neutral-500'}`}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function InventoryDepois() {
  const points = [
    'Automação Elimina Erros Manuais',
    'Rastreabilidade Completa: quem fez o quê e quando',
    'Alertas e relatórios em Tempo Real',
  ]

  return (
    <div className="flex flex-col flex-1 w-full animate-fade-in">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-skip-neutral-900">Sistema Skip</h3>
        <p className="text-base text-blue-violet-600">Inventory OS</p>
      </div>
      <ul className="space-y-3 mb-8">
        {points.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-blue-violet-100 p-1 shrink-0">
              <Check className="w-3 h-3 text-blue-violet-600" />
            </div>
            <span className="text-sm text-skip-neutral-700 leading-tight">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto bg-white border border-blue-violet-100 rounded-xl p-3 sm:p-4 shadow-sm flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-skip-neutral-50 rounded-lg p-2 flex flex-col">
            <span className="text-[10px] text-skip-neutral-500 uppercase tracking-wider font-medium">
              Itens
            </span>
            <span className="text-lg font-semibold text-skip-neutral-900">247</span>
          </div>
          <div className="bg-red-50 rounded-lg p-2 flex flex-col border border-red-100">
            <span className="text-[10px] text-red-600 uppercase tracking-wider font-medium flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> Alertas
            </span>
            <span className="text-lg font-semibold text-red-700">3</span>
          </div>
          <div className="bg-green-50 rounded-lg p-2 flex flex-col border border-green-100">
            <span className="text-[10px] text-green-600 uppercase tracking-wider font-medium">
              Rupturas
            </span>
            <span className="text-lg font-semibold text-green-700">0</span>
          </div>
        </div>
        <div className="text-[11px] w-full border border-skip-neutral-100 rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap min-w-max">
            <thead>
              <tr className="bg-skip-neutral-50 border-b border-skip-neutral-100 text-skip-neutral-500">
                <th className="p-2 font-medium">Produto</th>
                <th className="p-2 font-medium text-right">Estoque</th>
                <th className="p-2 font-medium text-center">Status</th>
                <th className="p-2 font-medium text-right">Tendência</th>
              </tr>
            </thead>
            <tbody className="text-skip-neutral-700">
              {DEPOIS_ROWS.map((r, i) => (
                <tr key={i} className="border-b border-skip-neutral-50 last:border-0">
                  <td className="p-2 font-medium">{r.prod}</td>
                  <td className="p-2 text-right">
                    {r.est} <span className="text-skip-neutral-400">/ {r.max}</span>
                  </td>
                  <td className="p-2 text-center">
                    <Badge
                      variant="outline"
                      className={`text-[9px] h-4 px-1.5 font-normal ${r.badge}`}
                    >
                      {r.status}
                    </Badge>
                  </td>
                  <td className="p-2 flex justify-end">
                    {r.trend === 'up' ? (
                      <TrendingUp className={`w-3 h-3 ${r.tc}`} />
                    ) : (
                      <TrendingDown className={`w-3 h-3 ${r.tc}`} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

import { X, Check, BarChart2, Users, FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const ANTES_POINTS = [
  'Feedback Lento e Baseado em pouca amostragem',
  'Difícil Replicar e armazenar o Padrão de Sucesso',
  'Cada líder avalia de um jeito',
]

const DEPOIS_POINTS = [
  'Armazenamento e análise de cada reunião com base na transcrição',
  'Análise de objeções com base em amostragem',
  'Visualização de performance individual do time',
]

export function SalesAntes() {
  return (
    <div className="flex flex-col flex-1 w-full h-full animate-fade-in">
      <div className="mb-6 shrink-0 flex flex-col gap-1.5">
        <span className="text-mono-xs uppercase text-blue-violet-600">Processo Padrão</span>
        <h3 className="text-xl font-heading font-semibold text-skip-neutral-100">
          Treinamento de Vendas no Achômetro
        </h3>
      </div>
      <ul className="space-y-3 mb-8 shrink-0">
        {ANTES_POINTS.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="rounded-full bg-red-50 p-1 shrink-0">
              <X className="w-3 h-3 text-red-400" />
            </div>
            <span className="text-sm text-skip-neutral-600 leading-tight">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex-1 border border-skip-neutral-1350 rounded-lg bg-skip-neutral-1450/50 p-4 flex flex-col min-h-[250px] shadow-inner relative overflow-hidden">
        <div className="bg-white rounded-t-md border-b border-skip-neutral-1300 p-2 flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-blue-500 rounded text-white flex items-center justify-center font-serif font-bold text-xs">
            W
          </div>
          <div className="flex flex-col gap-1">
            <div className="h-2 w-32 bg-skip-neutral-1300 rounded" />
            <div className="flex gap-1">
              <div className="h-1.5 w-8 bg-skip-neutral-1300 rounded" />
              <div className="h-1.5 w-12 bg-skip-neutral-1300 rounded" />
              <div className="h-1.5 w-10 bg-skip-neutral-1300 rounded" />
            </div>
          </div>
        </div>
        <div className="bg-white flex-1 p-5 rounded-md border border-skip-neutral-1300 shadow-sm shadow-black/5 rotate-[-1deg] mx-2 flex flex-col gap-4 relative font-serif">
          <div className="text-lg font-bold border-b border-skip-neutral-1300 pb-2 text-skip-neutral-300">
            Avaliação Call - João
          </div>
          <div className="space-y-3">
            <div>
              <div className="font-bold text-sm text-skip-neutral-400">Pontos Fortes:</div>
              <div className="text-sm text-skip-neutral-500 italic mt-1 text-blue-600 rotate-[1deg]">
                "Falou bem, foi simpático. Cliente gostou."
              </div>
            </div>
            <div>
              <div className="font-bold text-sm text-skip-neutral-400">O que melhorar:</div>
              <div className="text-sm text-skip-neutral-500 italic mt-1 text-red-500 rotate-[-2deg]">
                "Acho que faltou apertar no preço. Faltou rapport."
              </div>
            </div>
            <div>
              <div className="font-bold text-sm text-skip-neutral-400">Nota Final:</div>
              <div className="text-xl font-bold text-green-600 rotate-[-1deg]">7.5 / 10</div>
            </div>
          </div>
          <div className="absolute right-2 bottom-2 bg-yellow-200 p-3 rounded shadow-md rotate-[4deg] w-28 h-28 flex flex-col items-center justify-center text-yellow-800 text-sm leading-tight text-center border border-yellow-300 font-medium italic">
            Falar c/ RH sobre
            <br />
            treinamento!!
          </div>
        </div>
      </div>
    </div>
  )
}

export function SalesDepois() {
  return (
    <div className="flex flex-col flex-1 w-full h-full animate-fade-in">
      <div className="mb-6 shrink-0 flex flex-col gap-1.5">
        <span className="text-mono-xs uppercase text-blue-violet-600">Sistema Skip</span>
        <h3 className="text-xl font-heading font-semibold text-skip-neutral-100">
          Sales Intelligence Platform
        </h3>
      </div>
      <ul className="space-y-3 mb-8 shrink-0">
        {DEPOIS_POINTS.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="rounded-full bg-blue-violet-50 p-1 shrink-0">
              <Check className="w-3 h-3 text-blue-violet-400" />
            </div>
            <span className="text-sm text-skip-neutral-600 leading-tight">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex-1 rounded-xl border border-blue-violet-100 shadow-sm flex flex-col min-h-0 overflow-hidden">
        <div className="flex-1 bg-gradient-to-b from-white to-blue-violet-50 p-3 sm:p-4 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2 shrink-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2.5 flex items-center justify-between border border-skip-neutral-1350 shadow-sm">
              <div className="flex flex-col">
                <span className="text-[10px] text-skip-neutral-800 uppercase tracking-wider font-medium">
                  Score Médio
                </span>
                <span className="text-lg font-semibold text-green-600">89%</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                <BarChart2 className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2.5 flex items-center justify-between border border-skip-neutral-1350 shadow-sm">
              <div className="flex flex-col">
                <span className="text-[10px] text-skip-neutral-800 uppercase tracking-wider font-medium">
                  Reuniões
                </span>
                <span className="text-lg font-semibold text-blue-violet-600">142</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-violet-50 flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-violet-600" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 overflow-hidden min-h-0">
            <div className="flex flex-col gap-3 min-h-0">
              <div className="bg-white rounded-lg border border-skip-neutral-1350 shadow-sm flex flex-col h-[130px]">
                <div className="px-3 py-1.5 border-b border-skip-neutral-1350 bg-skip-neutral-1450 text-[10px] font-medium text-skip-neutral-600">
                  Últimas Reuniões
                </div>
                <div className="flex-1 overflow-y-auto p-1.5 flex flex-col gap-1 text-[10px]">
                  {[
                    { name: 'Demo - TechCorp', score: 92, rep: 'João' },
                    { name: 'Discovery - Acme', score: 65, rep: 'Maria' },
                    { name: 'Follow-up - Global', score: 88, rep: 'Pedro' },
                  ].map((mtg, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-1.5 rounded-md hover:bg-skip-neutral-1450 border border-transparent hover:border-skip-neutral-1350"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-blue-violet-50 flex items-center justify-center shrink-0">
                          <FileText className="w-3 h-3 text-blue-violet-600" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-medium text-skip-neutral-300 truncate w-16">
                            {mtg.name}
                          </span>
                          <span className="text-[8px] text-skip-neutral-600">{mtg.rep}</span>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-[9px] h-4 px-1 py-0 border-none font-medium ${mtg.score > 80 ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}
                      >
                        {mtg.score}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg border border-skip-neutral-1350 shadow-sm flex flex-col flex-1">
                <div className="px-3 py-1.5 border-b border-skip-neutral-1350 bg-skip-neutral-1450 text-[10px] font-medium text-skip-neutral-600">
                  Top Objeções
                </div>
                <div className="flex-1 p-2 flex flex-col justify-center gap-2">
                  <div className="flex items-center gap-2 text-[9px]">
                    <span className="w-12 truncate text-skip-neutral-500">Preço</span>{' '}
                    <div className="flex-1 h-1.5 bg-skip-neutral-1450 rounded-full overflow-hidden">
                      <div className="h-full bg-red-400 rounded-full w-[80%]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[9px]">
                    <span className="w-12 truncate text-skip-neutral-500">Concorrente</span>{' '}
                    <div className="flex-1 h-1.5 bg-skip-neutral-1450 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-400 rounded-full w-[60%]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[9px]">
                    <span className="w-12 truncate text-skip-neutral-500">Tempo</span>{' '}
                    <div className="flex-1 h-1.5 bg-skip-neutral-1450 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 rounded-full w-[40%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-skip-neutral-1350 shadow-sm flex flex-col min-h-0">
              <div className="px-3 py-1.5 border-b border-skip-neutral-1350 bg-skip-neutral-1450 text-[10px] font-medium text-skip-neutral-600">
                Ranking do Time
              </div>
              <div className="flex-1 overflow-y-auto p-1.5 flex flex-col gap-1 text-[10px]">
                {[
                  { pos: 1, name: 'João S.', win: '32%', score: '94', trend: '+' },
                  { pos: 2, name: 'Maria C.', win: '28%', score: '88', trend: '+' },
                  { pos: 3, name: 'Pedro A.', win: '24%', score: '82', trend: '-' },
                  { pos: 4, name: 'Ana B.', win: '18%', score: '76', trend: '-' },
                  { pos: 5, name: 'Lucas M.', win: '15%', score: '70', trend: '-' },
                  { pos: 6, name: 'Carla T.', win: '12%', score: '65', trend: '-' },
                ].map((r) => (
                  <div
                    key={r.pos}
                    className="flex items-center justify-between p-1.5 rounded hover:bg-skip-neutral-1450 border border-transparent hover:border-skip-neutral-1350"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0 ${r.pos === 1 ? 'bg-yellow-100 text-yellow-700' : r.pos === 2 ? 'bg-skip-neutral-1300 text-skip-neutral-500' : r.pos === 3 ? 'bg-orange-100 text-orange-700' : 'bg-skip-neutral-1450 text-skip-neutral-600'}`}
                      >
                        {r.pos}
                      </span>
                      <span className="font-medium text-skip-neutral-400 truncate w-14">
                        {r.name}
                      </span>
                    </div>
                    <div className="flex gap-2 text-right shrink-0">
                      <span className="text-skip-neutral-600 w-5">{r.win}</span>
                      <span
                        className={`font-semibold w-4 ${r.trend === '+' ? 'text-green-600' : 'text-red-500'}`}
                      >
                        {r.score}
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

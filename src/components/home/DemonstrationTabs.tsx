import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Check, X } from 'lucide-react'

const TAB_ITEMS = [
  { id: 'inventario', label: 'Inventário' },
  { id: 'vendas', label: 'Vendas' },
  { id: 'dashboards', label: 'Dashboards' },
]

export function DemonstrationTabs() {
  return (
    <div
      className="w-full mt-12 animate-fade-in-up"
      style={{ animationDelay: '200ms', animationFillMode: 'both' }}
    >
      <Tabs defaultValue="inventario" className="w-full flex flex-col items-center">
        <TabsList className="bg-transparent h-auto p-0 border-b border-skip-neutral-1350 rounded-none w-full max-w-[600px] justify-between sm:justify-center sm:gap-12 mb-10 overflow-x-auto flex-nowrap">
          {TAB_ITEMS.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="rounded-none px-2 sm:px-4 py-4 font-display font-medium text-base sm:text-lg text-skip-neutral-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-blue-violet-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-violet-600 hover:text-skip-neutral-900 transition-colors whitespace-nowrap"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="w-full text-left">
          {TAB_ITEMS.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="w-full mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <ComparisonLayout tabId={tab.id} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  )
}

function ComparisonLayout({ tabId }: { tabId: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Antes Card */}
      <div className="rounded-2xl border border-red-200 bg-skip-neutral-1500 p-6 sm:p-8 flex flex-col min-h-[350px] sm:min-h-[450px] transition-all duration-500 hover:shadow-sm">
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-[11px] sm:text-xs font-bold tracking-[0.1em] text-red-600 uppercase">
            Antes
          </span>
        </div>
        <div className="flex-1 w-full border border-dashed border-red-200/60 rounded-xl flex flex-col items-center justify-center bg-white/40 p-6 text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
          </div>
          <p className="font-body text-sm sm:text-base text-skip-neutral-500">
            Área reservada para demonstração visual
            <br />
            do processo de <span className="font-medium capitalize">{tabId}</span> desestruturado.
          </p>
        </div>
      </div>

      {/* Depois Card */}
      <div className="rounded-2xl border border-blue-violet-200 bg-gradient-to-b from-white to-blue-violet-50 p-6 sm:p-8 flex flex-col min-h-[350px] sm:min-h-[450px] shadow-lg shadow-blue-violet-900/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full bg-blue-violet-100 px-3 py-1 text-[11px] sm:text-xs font-bold tracking-[0.1em] text-blue-violet-700 uppercase">
            Depois
          </span>
        </div>
        <div className="flex-1 w-full border border-dashed border-blue-violet-200/60 rounded-xl flex flex-col items-center justify-center bg-white/60 p-6 text-center backdrop-blur-sm shadow-sm">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-violet-100 flex items-center justify-center mb-4">
            <Check className="w-5 h-5 sm:w-6 sm:h-6 text-blue-violet-600" />
          </div>
          <p className="font-body text-sm sm:text-base text-blue-violet-700">
            Área reservada para demonstração visual
            <br />
            do sistema de <span className="font-medium capitalize">{tabId}</span> no Skip.
          </p>
        </div>
      </div>
    </div>
  )
}

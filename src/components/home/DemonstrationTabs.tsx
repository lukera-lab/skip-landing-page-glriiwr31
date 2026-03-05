import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Check, X } from 'lucide-react'
import { InventoryAntes, InventoryDepois } from './tabs/InventoryTab'

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
      <div className="rounded-2xl border border-red-200 bg-skip-neutral-1500 p-6 sm:p-8 flex flex-col min-h-[350px] sm:min-h-[450px] transition-all duration-500 hover:shadow-sm overflow-hidden">
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-[11px] sm:text-xs font-bold tracking-[0.1em] text-red-600 uppercase">
            Antes
          </span>
        </div>
        {tabId === 'inventario' ? <InventoryAntes /> : <Placeholder tabId={tabId} type="antes" />}
      </div>

      {/* Depois Card */}
      <div className="rounded-2xl border border-blue-violet-200 bg-gradient-to-b from-white to-blue-violet-50 p-6 sm:p-8 flex flex-col min-h-[350px] sm:min-h-[450px] shadow-lg shadow-blue-violet-900/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full bg-blue-violet-100 px-3 py-1 text-[11px] sm:text-xs font-bold tracking-[0.1em] text-blue-violet-700 uppercase">
            Depois
          </span>
        </div>
        {tabId === 'inventario' ? <InventoryDepois /> : <Placeholder tabId={tabId} type="depois" />}
      </div>
    </div>
  )
}

function Placeholder({ tabId, type }: { tabId: string; type: 'antes' | 'depois' }) {
  const isAntes = type === 'antes'
  return (
    <div
      className={`flex-1 w-full border border-dashed rounded-xl flex flex-col items-center justify-center p-6 text-center ${isAntes ? 'border-red-200/60 bg-white/40' : 'border-blue-violet-200/60 bg-white/60 backdrop-blur-sm shadow-sm'}`}
    >
      <div
        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 ${isAntes ? 'bg-red-50' : 'bg-blue-violet-100'}`}
      >
        {isAntes ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
        ) : (
          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-blue-violet-600" />
        )}
      </div>
      <p
        className={`font-body text-sm sm:text-base ${isAntes ? 'text-skip-neutral-500' : 'text-blue-violet-700'}`}
      >
        Área reservada para demonstração visual
        <br />
        {isAntes ? 'do processo de ' : 'do sistema de '}
        <span className="font-medium capitalize">{tabId}</span>
        {isAntes ? ' desestruturado.' : ' no Skip.'}
      </p>
    </div>
  )
}

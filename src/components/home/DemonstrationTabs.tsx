import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Check, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { InventoryAntes, InventoryDepois } from './tabs/InventoryTab'
import { SalesAntes, SalesDepois } from './tabs/SalesTab'

const TAB_ITEMS = [
  { id: 'inventario', label: 'Inventário' },
  { id: 'vendas', label: 'Vendas' },
  { id: 'dashboards', label: 'Dashboards' },
]

export function DemonstrationTabs() {
  return (
    <div
      className="w-full mt-16 animate-fade-in-up"
      style={{ animationDelay: '200ms', animationFillMode: 'both' }}
    >
      <Tabs defaultValue="inventario" className="w-full flex flex-col items-center">
        <TabsList className="bg-transparent h-auto p-0 border-b border-skip-neutral-1350/60 rounded-none w-full max-w-[800px] justify-between sm:justify-center sm:gap-16 mb-16 overflow-x-auto flex-nowrap">
          {TAB_ITEMS.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="rounded-none px-4 py-4 font-display font-medium text-base sm:text-lg text-skip-neutral-800 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-blue-violet-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-violet-600 hover:text-skip-neutral-500 transition-colors whitespace-nowrap opacity-70 hover:opacity-100 data-[state=active]:opacity-100"
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full items-stretch">
      {/* Antes Card Container */}
      <div className="flex flex-col gap-4 h-full">
        <div className="flex justify-center">
          <Badge className="bg-red-50 text-red-800 hover:bg-red-50 border-red-100 shadow-none font-semibold px-5 py-1.5 text-sm rounded-full font-body">
            Antes
          </Badge>
        </div>
        <div className="rounded-2xl border border-skip-neutral-1350 bg-white p-6 flex flex-col flex-1 transition-all duration-500 shadow-sm hover:shadow-md overflow-hidden min-h-[400px]">
          {tabId === 'inventario' ? (
            <InventoryAntes />
          ) : tabId === 'vendas' ? (
            <SalesAntes />
          ) : (
            <Placeholder tabId={tabId} type="antes" />
          )}
        </div>
      </div>

      {/* Depois Card Container */}
      <div className="flex flex-col gap-4 h-full">
        <div className="flex justify-center">
          <Badge className="bg-blue-violet-50 text-blue-violet-800 hover:bg-blue-violet-50 border-blue-violet-100 shadow-none font-semibold px-5 py-1.5 text-sm rounded-full font-body">
            Depois
          </Badge>
        </div>
        <div className="rounded-2xl p-[1px] bg-gradient-to-br from-blue-violet-400 to-fuchsia-400 shadow-lg shadow-blue-violet-500/20 flex flex-col flex-1 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-violet-500/30 min-h-[400px]">
          <div className="bg-white rounded-[15px] p-6 flex flex-col flex-1 w-full overflow-hidden">
            {tabId === 'inventario' ? (
              <InventoryDepois />
            ) : tabId === 'vendas' ? (
              <SalesDepois />
            ) : (
              <Placeholder tabId={tabId} type="depois" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Placeholder({ tabId, type }: { tabId: string; type: 'antes' | 'depois' }) {
  const isAntes = type === 'antes'
  return (
    <div className="flex-1 w-full border border-dashed rounded-xl flex flex-col items-center justify-center p-6 text-center border-skip-neutral-1300 bg-skip-neutral-1500 min-h-[300px]">
      <div
        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 ${isAntes ? 'bg-red-50' : 'bg-blue-violet-50'}`}
      >
        {isAntes ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
        ) : (
          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-blue-violet-400" />
        )}
      </div>
      <p className="font-body text-sm sm:text-base text-skip-neutral-800">
        Área reservada para demonstração visual
        <br />
        {isAntes ? 'do processo de ' : 'do sistema de '}
        <span className="font-medium capitalize">{tabId}</span>
        {isAntes ? ' desestruturado.' : ' no Skip.'}
      </p>
    </div>
  )
}

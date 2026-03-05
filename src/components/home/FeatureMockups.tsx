import { Lock, Sparkles, ChevronDown } from 'lucide-react'

export const AgentsMockup = () => (
  <div className="w-full h-full flex items-center justify-center p-4 min-h-[160px]">
    <div className="relative w-full max-w-[400px] flex items-center justify-between px-4">
      <div className="absolute top-1/2 left-8 right-8 h-px bg-slate-200 -translate-y-1/2" />
      {[{ role: 'PM' }, { role: 'Lead' }, { role: 'Dev' }, { role: 'QA' }].map((node, i) => (
        <div key={node.role} className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[10px] font-bold text-slate-700 relative">
            {node.role}
            <div
              className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white bg-blue-violet-600 animate-pulse"
              style={{ animationDelay: `${i * 300}ms` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
)

export const DatabaseMockup = () => (
  <div className="w-full h-full p-4 flex flex-col min-h-[160px] items-center justify-center">
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden w-full max-w-[280px]">
      <div className="flex border-b border-slate-100 bg-slate-50 px-3 py-2 text-[10px] font-medium text-slate-500">
        <div className="flex-[0.8]">
          id <span className="text-slate-400 font-normal ml-1">uuid</span>
        </div>
        <div className="flex-1">
          name <span className="text-slate-400 font-normal ml-1">text</span>
        </div>
        <div className="flex-1">
          role <span className="text-slate-400 font-normal ml-1">enum</span>
        </div>
      </div>
      <div className="flex border-b border-slate-50 px-3 py-2 text-[10px] text-slate-600 items-center">
        <div className="flex-[0.8] font-mono text-slate-400">a1b2...</div>
        <div className="flex-1 truncate pr-2">Alice S.</div>
        <div className="flex-1">
          <span className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-medium">admin</span>
        </div>
      </div>
      <div className="flex px-3 py-2 text-[10px] text-slate-600 items-center">
        <div className="flex-[0.8] font-mono text-slate-400">c3d4...</div>
        <div className="flex-1 truncate pr-2">Bob C.</div>
        <div className="flex-1">
          <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">
            user
          </span>
        </div>
      </div>
    </div>
  </div>
)

export const AuthMockup = () => (
  <div className="w-full h-full flex items-center justify-center p-4 min-h-[160px]">
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm w-full max-w-[200px]">
      <div className="h-8 w-full border border-slate-200 rounded-md px-2.5 flex items-center text-[10px] text-slate-400 mb-2.5">
        name@company.com
      </div>
      <div className="h-8 w-full bg-slate-900 rounded-md flex items-center justify-center text-[10px] text-white font-medium mb-3 shadow-sm">
        Continue with Email
      </div>
      <div className="flex items-center gap-2 mb-3">
        <div className="h-px bg-slate-100 flex-1" />
        <span className="text-[9px] text-slate-400 font-medium">OR</span>
        <div className="h-px bg-slate-100 flex-1" />
      </div>
      <div className="h-8 w-full border border-slate-200 rounded-md flex items-center justify-center gap-2 text-[10px] text-slate-600 font-medium bg-white shadow-sm">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Google
      </div>
    </div>
  </div>
)

export const AIMockup = () => (
  <div className="w-full h-full flex items-center justify-center p-4 min-h-[160px]">
    <div className="w-full max-w-[200px] flex flex-col gap-3">
      <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-blue-violet-50 flex items-center justify-center text-blue-violet-600">
            <Sparkles className="w-3 h-3" />
          </div>
          <span className="text-[11px] font-medium text-slate-700">Claude 3.5 Sonnet</span>
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
      </div>
      <div className="bg-white border border-slate-200 rounded-lg p-2.5 shadow-sm flex flex-col gap-2">
        <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">
          API Key
        </span>
        <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded border border-slate-100">
          <div className="flex gap-0.5 ml-1">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-slate-300" />
            ))}
          </div>
          <span className="text-[10px] text-slate-500 font-mono ml-auto mr-1">a9f2</span>
        </div>
      </div>
    </div>
  </div>
)

export const DeployMockup = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-4 min-h-[160px]">
    <div className="w-full max-w-[220px] bg-white border border-slate-200 rounded-lg shadow-sm p-2 flex items-center gap-2">
      <div className="flex items-center justify-center w-5 h-5 rounded bg-green-50">
        <Lock className="w-3 h-3 text-green-600" />
      </div>
      <span className="text-[11px] text-slate-700 font-medium tracking-tight flex-1">
        suaempresa.skip.app
      </span>
    </div>
    <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-wide shadow-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
      ONLINE
    </div>
  </div>
)

export const CodeMockup = () => (
  <div className="w-full h-full p-4 flex items-center justify-center min-h-[160px]">
    <div className="w-full max-w-[360px] bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-50 border-b border-slate-200">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2 text-[10px] text-slate-500 font-mono font-medium">Dashboard.tsx</span>
      </div>
      <div className="p-4 text-[11px] font-mono leading-relaxed overflow-x-auto text-slate-600">
        <div>
          <span className="text-blue-violet-600 font-medium">import</span> {'{'} useState {'}'}{' '}
          <span className="text-blue-violet-600 font-medium">from</span>{' '}
          <span className="text-emerald-600">'react'</span>;
        </div>
        <div className="mt-1.5">
          <span className="text-blue-violet-600 font-medium">export function</span>{' '}
          <span className="text-blue-600 font-medium">UserDashboard</span>() {'{'}
        </div>
        <div className="ml-4 mt-0.5">
          <span className="text-blue-violet-600 font-medium">const</span> {'{'} data, isLoading{' '}
          {'}'} = <span className="text-blue-500">useQuery</span>(
          <span className="text-emerald-600">'users'</span>);
        </div>
        <div className="ml-4 mt-1.5">
          <span className="text-blue-violet-600 font-medium">if</span> (isLoading){' '}
          <span className="text-blue-violet-600 font-medium">return</span> {'<'}{' '}
          <span className="text-blue-600 font-medium">Loader</span> /{'>'};
        </div>
        <div className="mt-1.5">{'}'}</div>
      </div>
    </div>
  </div>
)

export const ChatMockup = () => (
  <div className="w-full h-full p-4 flex items-center justify-center min-h-[160px]">
    <div className="w-full max-w-[260px] flex flex-col gap-3">
      <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-3 text-[10px] text-slate-600 shadow-sm self-start max-w-[85%] leading-relaxed">
        Como posso otimizar a query de listagem de usuários?
      </div>
      <div className="bg-blue-violet-50 border border-blue-violet-100 rounded-2xl rounded-tr-sm p-3 text-[10px] text-blue-violet-900 shadow-sm self-end max-w-[85%] leading-relaxed">
        Sugiro adicionar um índice na coluna{' '}
        <code className="bg-white/60 px-1 py-0.5 rounded text-[9px] font-mono">email</code> e
        implementar paginação.
      </div>
    </div>
  </div>
)

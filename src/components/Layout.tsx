import { Outlet } from 'react-router-dom'
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-violet-100 selection:text-violet-900">
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

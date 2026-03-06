import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './layout/Footer'

export default function Layout() {
  useEffect(() => {
    const gtmId = 'GTM-KLTBF2BN'

    // Inject GTM head script
    if (!document.getElementById('gtm-script')) {
      const script = document.createElement('script')
      script.id = 'gtm-script'
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `
      document.head.appendChild(script)
    }

    // Inject GTM body noscript
    if (!document.getElementById('gtm-noscript')) {
      const noscript = document.createElement('noscript')
      noscript.id = 'gtm-noscript'

      const iframe = document.createElement('iframe')
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`
      iframe.height = '0'
      iframe.width = '0'
      iframe.style.display = 'none'
      iframe.style.visibility = 'hidden'

      noscript.appendChild(iframe)
      document.body.insertBefore(noscript, document.body.firstChild)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-violet-100 selection:text-violet-900">
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

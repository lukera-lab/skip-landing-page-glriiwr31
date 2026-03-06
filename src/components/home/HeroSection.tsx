import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import logoUrl from '@/assets/logo-skip-black-85aeb.svg'
import logoWhiteUrl from '@/assets/logo-skip-white-1b688.webp'
import heroBgUrl from '@/assets/bg-hero-skip-8319b.webp'
import liveBgUrl from '@/assets/bg-dark-e697d.webp'
import { VideoPlayer } from './VideoPlayer'

export function HeroSection({
  isLive = false,
  showVideo = false,
}: {
  isLive?: boolean
  showVideo?: boolean
}) {
  const handleScrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className={cn(
        'relative flex flex-col items-center py-32 w-full min-h-[600px] md:min-h-[800px]',
        isLive && 'bg-skip-neutral-300 overflow-hidden',
      )}
    >
      {/* Background radial gradient for subtle depth - applied in Live version for consistency */}
      {isLive && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.06)_0%,transparent_60%)] pointer-events-none" />
      )}

      {/* Background wrapper with fade-out mask */}
      <div className="absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,white_80%,transparent_100%)] pointer-events-none overflow-hidden">
        {/* Hero Background Image */}
        <img
          src={isLive ? liveBgUrl : heroBgUrl}
          alt="Hero Background"
          className={cn(
            'absolute inset-0 w-full h-full object-cover object-top',
            isLive && 'opacity-30',
          )}
          aria-hidden="true"
        />

        {/* Pulsating Overlay for Live Page */}
        {isLive && (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.20)_0%,transparent_80%)] animate-pulse-slow mix-blend-screen pointer-events-none" />
        )}
      </div>

      <div className="max-w-[1100px] w-full flex flex-col items-center text-center mx-auto px-5 relative z-10">
        {/* Logo Icon */}
        <div className="flex items-center justify-center mb-6 animate-fade-in-down">
          <img
            src={isLive ? logoWhiteUrl : logoUrl}
            alt="Skip Logo"
            className="h-10 sm:h-12 w-auto drop-shadow-sm"
          />
        </div>

        {/* Main Headline */}
        <h2
          className={cn(
            'font-display text-[28px] leading-[1.1em] sm:text-5xl lg:text-[64px] sm:leading-[1.1] font-semibold tracking-tight animate-fade-in-up w-full sm:max-w-none mx-auto',
            isLive ? 'text-white' : 'text-skip-neutral-0',
          )}
          style={{ animationFillMode: 'both' }}
        >
          O criador de Sistemas Internos <br className="hidden md:block" />
          mais{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-violet-600 to-fuchsia-600">
            fácil e intuitivo
          </span>{' '}
          do mundo
        </h2>

        {/* Subheadline */}
        <p
          className={cn(
            'font-body text-base sm:text-lg lg:text-xl max-w-[640px] mx-auto animate-fade-in-up leading-[1.3] mt-4 mb-2',
            isLive ? 'text-skip-neutral-1000' : 'text-skip-neutral-800',
          )}
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          Mande suas ideias para o Skip. Receba Sistemas Internos perfeitos para melhorar a
          eficiência dos processos da sua empresa
        </p>

        {/* Disclaimer */}
        <div
          className="mb-10 animate-fade-in-up"
          style={{ animationDelay: '150ms', animationFillMode: 'both' }}
        >
          <span
            className={cn(
              'font-mono text-[10px] sm:text-xs tracking-[0.15em] uppercase font-semibold',
              isLive ? 'text-blue-violet-500' : 'text-blue-violet-600',
            )}
          >
            [Sem o custo de contratar desenvolvedores]
          </span>
        </div>

        {/* Embedded Video */}
        {showVideo && (
          <div
            className="w-full max-w-4xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: '200ms', animationFillMode: 'both' }}
          >
            <span className={cn(
              'block text-center font-mono text-sm md:text-base tracking-[0.1em] uppercase font-semibold mb-4',
              isLive ? 'text-white' : 'text-skip-neutral-300',
            )}>
              Assista a live de lançamento
            </span>
            <div className="relative w-full rounded-[20px] overflow-hidden border border-skip-neutral-1350/50 shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Tu1EdYbs32Q?si=NDcTkUC6QI0MXniV"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Call to Actions */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in-up"
          style={{ animationDelay: '300ms', animationFillMode: 'both' }}
        >
          <div className="relative group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-brand rounded-[90px] blur opacity-25 group-hover:opacity-40 transition duration-500" />
            <Button
              onClick={handleScrollToOffer}
              className="relative w-full sm:w-auto font-display font-medium text-sm sm:text-base text-white transition-all duration-300 group-hover:-translate-y-0.5"
            >
              Aproveitar Condição Exclusiva
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

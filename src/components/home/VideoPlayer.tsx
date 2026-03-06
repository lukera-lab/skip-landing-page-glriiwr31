import { cn } from '@/lib/utils'

interface VideoPlayerProps {
  videoId: string
  label?: string
  isLive?: boolean
  className?: string
}

export function VideoPlayer({ videoId, label, isLive, className }: VideoPlayerProps) {
  return (
    <div className={cn('flex flex-col items-center gap-4 w-full', className)}>
      {label && (
        <span
          className={cn(
            'font-mono text-sm md:text-base tracking-[0.1em] uppercase font-semibold text-center',
            isLive ? 'text-white' : 'text-skip-neutral-300',
          )}
        >
          {label}
        </span>
      )}
      <div className="w-full rounded-[20px] overflow-hidden border border-skip-neutral-1350/50 shadow-2xl relative aspect-video bg-black/5 backdrop-blur-sm ring-1 ring-white/10">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?si=NDcTkUC6QI0MXniV`}
          title={label || 'Video Player'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

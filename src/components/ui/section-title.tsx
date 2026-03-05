import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function SectionTitle({ className, ...props }: SectionTitleProps) {
  return <h2 className={cn('text-[28px] md:text-[40px] leading-[1.1em]', className)} {...props} />
}

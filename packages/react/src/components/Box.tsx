import type { HTMLAttributes, ReactNode } from 'react'

import { Slot } from '@radix-ui/react-slot'

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  asChild?: boolean
}

const Box = ({ className, asChild, children, ...props }: BoxProps) => {
  const Component = asChild ? Slot : 'div'

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  )
}

export { Box }
export type { BoxProps }

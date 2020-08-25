import type { TailwindProps } from '../../types'
import React from 'react'
import classnames from 'classnames'

import { filterProps, getTailwindClassNames, tailwindProps } from '../../utils'

export interface BaseProps extends TailwindProps {
  as?: React.ElementType
}

const Base = <
  A extends HTMLElement = HTMLDivElement,
  T extends React.HTMLAttributes<A> = React.HTMLAttributes<A>
>({
  as = 'div',
  children,
  className,
  focusable,
  ...rest
}: BaseProps & React.DetailedHTMLProps<T, A>) => {
  const Component = as

  const focusProps = focusable
    ? {
        'outline-focus': 'none',
        'shadow-focus': 'outline',
      }
    : {}

  return (
    <Component
      {...filterProps(rest as Record<string, unknown>, tailwindProps)}
      className={classnames(
        getTailwindClassNames(
          {
            ...rest,
            ...focusProps,
          },
          // TODO: { prefix: theme.prefix },
        ),
        className,
      )}
      // ref={innerRef} - TODO: use hook
    >
      {children}
    </Component>
  )
}

export default Base

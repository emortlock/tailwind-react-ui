import type { Theme } from './TailwindTheme'

import React from 'react'

import { TailwindTheme } from './TailwindTheme'

export interface WithTheme {
  theme: Theme
}

export const withTheme = <P extends React.PropsWithChildren<{ theme: Theme }>>(
  Component: React.FC<P>,
) => {
  const WithTheme: React.FC<Omit<P, 'theme'>> = (props) => (
    <TailwindTheme.Consumer>
      {(theme) => {
        // @ts-ignore FIXME: Constraint error
        return <Component {...props} theme={theme} />
      }}
    </TailwindTheme.Consumer>
  )

  WithTheme.displayName = `WithTheme(${Component.displayName})`

  return WithTheme
}

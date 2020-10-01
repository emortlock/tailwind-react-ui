import { Theme } from './TailwindTheme'

import React from 'react'
import merge from 'lodash.merge'

import { defaultTheme } from './defaultTheme'
import { TailwindTheme } from './TailwindTheme'

export const TailwindThemeProvider = ({
  theme = {},
  children,
}: {
  theme: Partial<Theme>
  children: React.ReactNode
}) => {
  const mergedTheme: Theme = merge({}, defaultTheme, theme)

  return (
    <TailwindTheme.Provider value={mergedTheme}>
      {children}
    </TailwindTheme.Provider>
  )
}

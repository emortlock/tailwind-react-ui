import React from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash.merge'

import defaultTheme from './defaultTheme'
import TailwindTheme from './TailwindTheme'

const TailwindThemeProvider = ({ theme, children }) => {
  const mergedTheme = merge(defaultTheme, theme)

  return (
    <TailwindTheme.Provider value={mergedTheme}>
      {children}
    </TailwindTheme.Provider>
  )
}

TailwindThemeProvider.propTypes = {
  theme: PropTypes.shape({}),
  children: PropTypes.node,
}

TailwindThemeProvider.defaultProps = {
  theme: {},
  children: undefined,
}

export default TailwindThemeProvider

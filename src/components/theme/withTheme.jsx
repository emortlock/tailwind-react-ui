import React from 'react'

import TailwindTheme from './TailwindTheme'

const withTheme = Component => {
  const WithTheme = props => (
    <TailwindTheme.Consumer>
      {theme => <Component {...props} theme={theme} />}
    </TailwindTheme.Consumer>
  )

  WithTheme.displayName = `WithTheme(${Component.displayName})`

  return WithTheme
}

export default withTheme

import React from 'react'

import TailwindConfig from './TailwindConfig'

const withConfig = Component => {
  const WithConfig = props => (
    <TailwindConfig.Consumer>
      {config => <Component {...props} config={config} />}
    </TailwindConfig.Consumer>
  )

  WithConfig.displayName = `WithConfig(${Component.displayName})`

  return WithConfig
}

export default withConfig

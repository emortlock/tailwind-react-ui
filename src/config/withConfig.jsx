import React from 'react'

import TailwindConfig from './TailwindConfig'

const withConfig = Component => props => (
  <TailwindConfig.Consumer>
    {config => <Component {...props} config={config} />}
  </TailwindConfig.Consumer>
)

export default withConfig

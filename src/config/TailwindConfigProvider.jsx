import React from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash.merge'

import defaultConfig from './defaultConfig'
import TailwindConfig from './TailwindConfig'

const TailwindConfigProvider = ({ config, children }) => {
  const mergedConfig = merge(defaultConfig, config)

  return (
    <TailwindConfig.Provider value={mergedConfig}>
      {children}
    </TailwindConfig.Provider>
  )
}

TailwindConfigProvider.propTypes = {
  config: PropTypes.shape({}),
  children: PropTypes.node,
}

TailwindConfigProvider.defaultProps = {
  config: {},
  children: undefined,
}

export default TailwindConfigProvider

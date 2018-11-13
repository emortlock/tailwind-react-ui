import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = ({ children }) => (
  <div className="bg-checkerboard border overflow-auto">
    <div className="p-4">{children}</div>
  </div>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

Wrapper.displayName = 'Wrapper'

export default Wrapper

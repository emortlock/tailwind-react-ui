import React from 'react'
import PropTypes from 'prop-types'

import { BaseComponent } from '../tailwind'

const HelpText = ({ is, field: { helpId }, ...rest }) => (
  <BaseComponent is={is} id={helpId} {...rest} />
)

HelpText.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  field: PropTypes.shape({
    helpId: PropTypes.string,
  }),
}

HelpText.defaultProps = {
  is: 'div',
  field: {},
}

export default HelpText

import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '../primitives'
import { InfoText } from '../typography'

/**
 * @see Renders as [InfoText](#infotext) component by default
 */
const HelpText = ({ is, field: { helpId }, ...rest }) => (
  <Box is={is} id={helpId} {...rest} />
)

HelpText.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  field: PropTypes.shape({
    helpId: PropTypes.string,
  }),
  size: PropTypes.number,
}

HelpText.defaultProps = {
  is: InfoText,
  field: {},
  size: 1,
}

export default HelpText

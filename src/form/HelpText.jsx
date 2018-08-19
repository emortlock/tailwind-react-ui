import React from 'react'
import PropTypes from 'prop-types'

import { InfoText } from '../typography'

const HelpText = ({ field: { helpId }, ...rest }) => (
  <InfoText {...rest} id={helpId} />
)

HelpText.propTypes = {
  field: PropTypes.shape({
    helpId: PropTypes.string,
  }),
}

HelpText.defaultProps = {
  field: {},
}

export default HelpText

import React from 'react'
import PropTypes from 'prop-types'

import ContentBlock from './ContentBlock'

const Section = ({ is, ...rest }) => <ContentBlock is={is} {...rest} />

Section.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
}

Section.defaultProps = {
  is: 'section',
}

export default Section

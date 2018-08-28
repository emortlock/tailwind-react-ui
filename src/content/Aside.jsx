import React from 'react'
import PropTypes from 'prop-types'

import ContentBlock from './ContentBlock'

const Aside = ({ is, ...rest }) => <ContentBlock is={is} {...rest} />

Aside.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
}

Aside.defaultProps = {
  is: 'aside',
}

export default Aside

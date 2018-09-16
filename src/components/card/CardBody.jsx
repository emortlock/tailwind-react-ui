import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { Box } from '../primitives'

const CardBody = ({ theme, is, children, ...rest }) => (
  <Box is={is} p={theme.spacing.md} {...rest}>
    {children}
  </Box>
)

CardBody.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
}

CardBody.defaultProps = {
  is: 'div',
  children: undefined,
}

export { CardBody as component }
export default withTheme(CardBody)

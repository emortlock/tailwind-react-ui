import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { Box } from '../primitives'

const NavBrand = ({
  theme,
  header: { style, screen },
  is,
  children,
  ...rest
}) => {
  const responsive = screen
    ? {
        [`m-${screen}`]: { r: theme.spacing.lg },
      }
    : {}

  const aria = !(typeof is === 'string' && is.startsWith('h'))
    ? {
        role: 'heading',
        'aria-level': 1,
      }
    : {}

  return (
    <Box
      is={is}
      inlineBlock
      noUnderline
      flex={[true, 'no-shrink']}
      items="center"
      h={12}
      text={style.text || theme.textColors.on.primary}
      {...responsive}
      {...aria}
      {...rest}
    >
      {children}
    </Box>
  )
}

NavBrand.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  header: PropTypes.shape({
    style: PropTypes.object,
    screen: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }),
}

NavBrand.defaultProps = {
  is: 'div',
  children: undefined,
  header: { style: {}, screen: 'lg' },
}

export { NavBrand as component }
export default withTheme(NavBrand)

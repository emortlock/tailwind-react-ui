import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '../primitives'
import { Button } from '../button'
import { withTheme } from '../theme'

const Bar = () => (
  <Box inlineBlock border="b" style={{ borderColor: 'currentColor' }} />
)

const NavToggle = ({
  theme,
  children,
  onClick,
  header: { onToggle, style, id, screen },
  ...rest
}) => {
  const handleClick = e => {
    onToggle()
    if (onClick) onClick(e)
  }

  const responsive = screen
    ? {
        [`hidden-${screen}`]: true,
      }
    : {}

  return (
    <Button
      w={12}
      h={12}
      p={0}
      block
      onClick={handleClick}
      aria-label="Open menu"
      aria-haspopup="true"
      aria-controls={`${id}-nav`}
      text={style.text || theme.textColors.on.primary}
      bg-hocus={style.text || theme.textColors.on.primary}
      text-hocus={style.bg || theme.brandColors.primary}
      {...responsive}
      {...rest}
    >
      {children || (
        <Box
          flex={[true, 'col']}
          items="stretch"
          justify="around"
          h="full"
          p={3}
        >
          <Bar />
          <Bar />
          <Bar />
        </Box>
      )}
    </Button>
  )
}

NavToggle.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  header: PropTypes.shape({
    onToggle: PropTypes.func.isRequired,
    screen: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    style: PropTypes.object,
  }),
  onClick: PropTypes.func,
}

NavToggle.defaultProps = {
  children: undefined,
  onClick: undefined,
  header: {
    style: {},
    screen: 'lg',
  },
}

export { NavToggle as component }
export default withTheme(NavToggle)

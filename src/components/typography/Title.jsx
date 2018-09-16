import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { Text } from '../primitives'

const Title = ({
  theme,
  children,
  is,
  size,
  subtitle,
  flush,
  level,
  ...rest
}) => {
  const hLevel = level || Math.max(7 - size, 1)
  const element = is || `h${hLevel}`

  let ariaProps = {}

  if (!subtitle && element !== 'string' && !/h[1-6]/i.test(element)) {
    ariaProps = {
      role: 'heading',
      'aria-level': hLevel,
    }
  }

  return (
    <Text
      is={element}
      {...ariaProps}
      leading="tight"
      font={[
        theme.text.family[subtitle ? 'subtitle' : 'title'],
        subtitle ? 'medium' : 'bold',
      ]}
      text={[
        theme.text.size.title[size - 1],
        subtitle ? theme.textColors.body : theme.textColors.emphasis,
      ]}
      m={!flush ? { b: theme.spacing.md } : undefined}
      {...rest}
    >
      {children}
    </Text>
  )
}

Title.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  size: PropTypes.number,
  subtitle: PropTypes.bool,
  flush: PropTypes.bool,
  level: PropTypes.number,
}

Title.defaultProps = {
  children: undefined,
  is: undefined,
  size: 4,
  subtitle: false,
  flush: false,
  level: undefined,
}

export { Title as component }
export default withTheme(Title)

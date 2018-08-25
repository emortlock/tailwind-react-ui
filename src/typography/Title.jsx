import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import {
  getTailwindClassNames,
  tailwindProps,
  tailwindPropTypes,
} from '../tailwind'
import { filterProps } from '../utils'

const Title = ({
  theme,
  children,
  className,
  is,
  size,
  subtitle,
  flush,
  h,
  ...rest
}) => {
  const level = h || Math.max(7 - size, 1)
  const Component = is || `h${level}`
  const userClassNames = classnames(getTailwindClassNames(rest), className)

  let ariaProps = {}

  if (!subtitle && Component !== 'string' && !/h[1-6]/i.test(Component)) {
    ariaProps = {
      role: 'heading',
      'aria-level': level,
    }
  }
  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      {...ariaProps}
      className={classnames(
        `font-${theme.text.family[subtitle ? 'subtitle' : 'title']}`,
        'leading-tight',
        `text-${theme.text.size.title[size - 1]}`,
        !subtitle && `text-${theme.textColors.emphasis} font-bold`,
        subtitle && `text-${theme.textColors.body} font-medium`,
        !flush && `mb-${theme.spacing.md}`,
        userClassNames,
      )}
    >
      {children}
    </Component>
  )
}

Title.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  size: PropTypes.number,
  subtitle: PropTypes.bool,
  flush: PropTypes.bool,
  h: PropTypes.number,
  ...tailwindPropTypes,
}

Title.defaultProps = {
  children: undefined,
  className: undefined,
  is: undefined,
  size: 4,
  subtitle: false,
  flush: false,
  h: undefined,
}

export { Title as component }
export default withTheme(Title)

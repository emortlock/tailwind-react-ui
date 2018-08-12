import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import withConfig from '../withConfig'

const Title = ({
  config,
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
  let ariaProps = {}

  if (!subtitle && Component !== 'string' && !/h[1-6]/i.test(Component)) {
    ariaProps = {
      role: 'heading',
      'aria-level': level,
    }
  }
  return (
    <Component
      {...rest}
      {...ariaProps}
      className={classnames(
        `font-${config.text.family[subtitle ? 'subtitle' : 'title']}`,
        'leading-tight',
        `text-${config.text.size.title[size - 1]}`,
        !subtitle && `text-${config.textColors.emphasis} font-bold`,
        subtitle && `text-${config.textColors.body} font-medium`,
        !flush && `mb-${config.spacing.md}`,
        className,
      )}
    >
      {children}
    </Component>
  )
}

Title.propTypes = {
  config: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  size: PropTypes.number,
  subtitle: PropTypes.bool,
  flush: PropTypes.bool,
  h: PropTypes.number,
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
export default withConfig(Title)

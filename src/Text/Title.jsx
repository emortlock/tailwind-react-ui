import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { TailwindContext } from '../context'

const Title = ({
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
    <TailwindContext.Consumer>
      {theme => (
        <Component
          {...rest}
          {...ariaProps}
          className={classnames(
            `font-${theme.text.family[subtitle ? 'subtitle' : 'title']}`,
            'leading-tight',
            `text-${theme.text.size.title[size - 1]}`,
            !subtitle && `text-${theme.textColors.emphasis} font-bold`,
            subtitle && `text-${theme.textColors.body} font-medium`,
            !flush && `mb-${theme.spacing.md}`,
            className,
          )}
        >
          {children}
        </Component>
      )}
    </TailwindContext.Consumer>
  )
}

Title.propTypes = {
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

export default Title

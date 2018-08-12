import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { TailwindContext } from '../context'

const Text = ({
  children,
  className,
  is,
  size,
  p,
  lead,
  bold,
  italic,
  ...rest
}) => {
  const Component = is === 'span' && p ? 'p' : is

  return (
    <TailwindContext.Consumer>
      {theme => (
        <Component
          {...rest}
          className={classnames(
            'leading-normal',
            `font-${theme.text.family.body}`,
            `text-${
              theme.text.size.body[
                (lead ? theme.text.size.body.length : size) - 1
              ]
            }`,
            `text-${theme.textColors.body}`,
            p && `mb-${theme.spacing.md}`,
            bold && 'font-bold',
            italic && 'italic',
            className,
          )}
        >
          {children}
        </Component>
      )}
    </TailwindContext.Consumer>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  size: PropTypes.number,
  p: PropTypes.bool,
  lead: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
}

Text.defaultProps = {
  children: undefined,
  className: undefined,
  is: 'span',
  size: 1,
  p: false,
  lead: false,
  bold: false,
  italic: false,
}

export default Text

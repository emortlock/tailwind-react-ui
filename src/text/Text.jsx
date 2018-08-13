import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

const Text = ({
  config,
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
    <Component
      {...rest}
      className={classnames(
        'leading-normal',
        `font-${config.text.family.body}`,
        `text-${
          config.text.size.body[
            (lead ? config.text.size.body.length : size) - 1
          ]
        }`,
        `text-${config.textColors.body}`,
        p && `mb-${config.spacing.md}`,
        bold && 'font-bold',
        italic && 'italic',
        className,
      )}
    >
      {children}
    </Component>
  )
}

Text.propTypes = {
  config: PropTypes.shape({}).isRequired,
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

export { Text as component }
export default withConfig(Text)

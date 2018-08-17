import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

import Container from '../container/Container'

const Header = ({ config, is, children, className, ...rest }) => {
  const Component = is

  return (
    <Component
      {...rest}
      className={classnames(
        `bg-${config.baseColors.primary}`,
        'py-6',
        className,
      )}
    >
      <Container
        max="md"
        className="flex items-center justify-between flex-wrap"
        padding
      >
        {children}
      </Container>
    </Component>
  )
}

Header.propTypes = {
  config: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
}

Header.defaultProps = {
  is: 'header',
  children: undefined,
  className: undefined,
}

export { Header as component }
export default withConfig(Header)

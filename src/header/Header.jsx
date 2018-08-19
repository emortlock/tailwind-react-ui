import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

import Container from '../container/Container'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(forceState) {
    const { open } = this.state

    this.setState({
      open: forceState || !open,
    })
  }

  render() {
    const { open } = this.state
    const { config, is, children, className, ...rest } = this.props

    const Component = is

    const headerProps = {
      open,
      onToggle: this.handleToggle,
    }

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
          {React.Children.map(children, child =>
            React.cloneElement(child, { header: headerProps }),
          )}
        </Container>
      </Component>
    )
  }
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

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import {
  getTailwindClassNames,
  tailwindProps,
  tailwindPropToClassName,
  tailwindPropTypes,
} from '../tailwind'
import { filterProps } from '../utils'

import Container from '../container/Container'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      collapsable: true,
    }

    this.mql = null

    this.handleMatch = this.handleMatch.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidMount() {
    const { theme } = this.props
    if (window.matchMedia) {
      this.mql = window.matchMedia(`(min-width: ${theme.breakpoints.lg})`)
      this.mql.addListener(this.handleMatch)

      if (this.mql.matches) {
        this.handleMatch(this.mql)
      }
    }
  }

  componentWillUnmount() {
    if (this.mql) this.mql.removeListener(this.handleMatch)
  }

  handleToggle(forceState) {
    const { open } = this.state

    this.setState({
      open: forceState || !open,
    })
  }

  handleMatch(mql) {
    this.setState({ collapsable: !mql.matches })
  }

  render() {
    const { open, collapsable } = this.state
    const { theme, is, children, className, bg, text, ...rest } = this.props

    const Component = is

    const headerProps = {
      style: {
        bg: bg || theme.brandColors.primary,
        text: text || theme.textColors.on.primary,
      },
      open,
      collapsable,
      onToggle: this.handleToggle,
    }

    return (
      <Component
        {...filterProps(rest, tailwindProps)}
        className={classnames(
          getTailwindClassNames(rest),
          tailwindPropToClassName('bg', headerProps.style.bg),
          tailwindPropToClassName('text', headerProps.style.text),
          'py-6',
          className,
        )}
      >
        <Container
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
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  ...tailwindPropTypes,
}

Header.defaultProps = {
  is: 'header',
  children: undefined,
  className: undefined,
}

export { Header as component }
export default withTheme(Header)

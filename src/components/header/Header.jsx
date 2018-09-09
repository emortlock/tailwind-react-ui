import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'
import { getUniqueID, filterProps } from '../utils'
import { Container } from '../container'

class Header extends PureComponent {
  constructor(props) {
    const { id } = props

    super(props)

    this.state = {
      open: false,
      collapsable: true,
    }

    this.mql = null
    this.id = id || getUniqueID('header')

    this.handleMatch = this.handleMatch.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidMount() {
    const { theme, screen } = this.props

    if (window.matchMedia) {
      this.mql = window.matchMedia(`(min-width: ${theme.breakpoints[screen]})`)
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
    const { theme, is, children, bg, text, screen, ...rest } = this.props

    const headerProps = {
      id: this.id,
      style: {
        bg: bg || theme.brandColors.primary,
        text: text || theme.textColors.on.primary,
      },
      open,
      collapsable,
      onToggle: this.handleToggle,
      screen,
    }

    return (
      <BaseComponent
        is={is}
        id={headerProps.id}
        bg={headerProps.style.bg}
        text={headerProps.style.text}
        p={{ y: theme.spacing.md }}
        role="banner"
        {...filterProps(rest, ['id'])}
      >
        <Container
          flex={[true, 'wrap']}
          items="center"
          justify="between"
          padding
        >
          {React.Children.map(children, child =>
            React.cloneElement(child, { header: headerProps }),
          )}
        </Container>
      </BaseComponent>
    )
  }
}

Header.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  bg: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
  screen: PropTypes.string,
}

Header.defaultProps = {
  is: 'header',
  children: undefined,
  bg: undefined,
  text: undefined,
  id: undefined,
  screen: 'lg',
}

export { Header as component }
export default withTheme(Header)

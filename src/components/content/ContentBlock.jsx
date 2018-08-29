import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { BaseComponent } from '../tailwind'
import { withTheme } from '../theme'
import { getUniqueID } from '../utils'

import ContentTitle from './ContentTitle'

class ContentBlock extends PureComponent {
  constructor(props) {
    super(props)
    this.id = getUniqueID('content')
  }

  render() {
    const { theme, is, children, ...rest } = this.props

    return (
      <BaseComponent
        is={is}
        p={theme.spacing.md}
        aria-labelledby={this.id}
        {...rest}
      >
        {React.Children.map(children, (child, index) => {
          if (child.type === ContentTitle) {
            return React.cloneElement(child, { content: { id: this.id } })
          }

          if (index === React.Children.count(children) - 1) {
            return React.cloneElement(child, { m: { b: 0 } })
          }

          return child
        })}
      </BaseComponent>
    )
  }
}

ContentBlock.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
}

ContentBlock.defaultProps = {
  is: 'section',
  children: undefined,
  className: undefined,
}

export { ContentBlock as component }
export default withTheme(ContentBlock)

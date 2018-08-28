import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Button } from '../button'
import { withTheme } from '../theme'

const Bar = () => (
  <span
    className="border-b inline-block"
    style={{ borderColor: 'currentColor' }}
  />
)

const NavToggle = ({
  theme,
  children,
  className,
  onClick,
  header: { onToggle, style, id },
  ...rest
}) => {
  const handleClick = e => {
    onToggle()
    if (onClick) onClick(e)
  }

  return (
    <Button
      w={12}
      h={12}
      p={0}
      className={classnames('block lg:hidden', className)}
      onClick={handleClick}
      aria-label="Open menu"
      aria-haspopup="true"
      aria-controls={`${id}-nav`}
      text={style.text}
      bg-hocus={style.text}
      text-hocus={style.bg}
      {...rest}
    >
      {children || (
        <span className="flex flex-col items-stretch justify-around h-full p-3">
          <Bar />
          <Bar />
          <Bar />
        </span>
      )}
    </Button>
  )
}

NavToggle.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.shape({
    onToggle: PropTypes.func.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
}

NavToggle.defaultProps = {
  children: undefined,
  className: undefined,
  onClick: undefined,
}

export { NavToggle as component }
export default withTheme(NavToggle)

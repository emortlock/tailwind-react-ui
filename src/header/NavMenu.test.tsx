import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawNavMenu as NavMenu, NavMenuProps } from './NavMenu'
import { NavItem } from './NavItem'
import { defaultTheme } from '../theme'
import { TransitionStatus } from '../utils'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props: NavMenuProps = Object.assign(
    {
      header: { isOpen: true, isCollapsable: true },
      transition: 'entered' as TransitionStatus,
      theme: defaultTheme,
    },
    testProps,
  )

  const wrapper = render(
    <NavMenu {...props}>
      <NavItem>About</NavItem>
      <NavItem>Blog</NavItem>
      <button type="button">Download</button>
    </NavMenu>,
  )

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('NavMenu', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})

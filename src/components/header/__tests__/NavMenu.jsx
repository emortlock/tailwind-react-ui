import React from 'react'
import { shallow } from 'enzyme'

import { component as NavMenu } from '../NavMenu'
import NavItem from '../NavItem'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign(
    {
      header: { open: true, collapsable: true },
      transition: 'entered',
      theme: defaultTheme,
    },
    testProps,
  )

  const wrapper = shallow(
    <NavMenu {...props}>
      <NavItem>About</NavItem>
      <NavItem>Blog</NavItem>
      <button type="button">Download</button>
    </NavMenu>,
  )

  return {
    props,
    wrapper,
  }
}

describe('NavMenu', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

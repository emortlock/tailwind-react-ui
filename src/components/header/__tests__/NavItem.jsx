import React from 'react'
import { shallow } from 'enzyme'

import { component as NavItem } from '../NavItem'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign(
    { theme: defaultTheme, header: { style: { bg: 'blue', text: 'white' } } },
    testProps,
  )

  const wrapper = shallow(<NavItem {...props}>Link</NavItem>)

  return {
    props,
    wrapper,
  }
}

describe('NavItem', () => {
  it('renders matching snapshot', () => {
    // eslint-disable-next-line
    const { wrapper } = setup({ is: props => <a {...props} href="#test" /> })

    expect(wrapper).toMatchSnapshot()
  })
})

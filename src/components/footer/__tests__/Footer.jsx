import React from 'react'
import { shallow } from 'enzyme'

import { component as Footer } from '../Footer'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = shallow(<Footer {...props}>&copy; E Corp</Footer>)

  return {
    props,
    wrapper,
  }
}

describe('Footer', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'

import { component as Base } from '../Base'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = shallow(<Base {...props}>Hello World</Base>)

  return {
    props,
    wrapper,
  }
}

describe('Base', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

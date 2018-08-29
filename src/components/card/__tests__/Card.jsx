import React from 'react'
import { shallow } from 'enzyme'

import { component as Card } from '../Card'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = shallow(<Card {...props}>Hello World!</Card>)

  return {
    props,
    wrapper,
  }
}

describe('Card', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

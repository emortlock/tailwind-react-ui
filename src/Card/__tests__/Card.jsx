import React from 'react'
import { shallow } from 'enzyme'

import { Card } from '..'

const setup = (testProps = {}) => {
  const props = Object.assign(testProps)

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

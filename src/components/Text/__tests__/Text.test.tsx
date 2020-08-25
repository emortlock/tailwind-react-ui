import React from 'react'
import { shallow } from 'enzyme'

import { Text } from '..'

const setup = (testProps = {}) => {
  const props = Object.assign({}, testProps)

  const wrapper = shallow(<Text {...props}>Hello World</Text>)

  return {
    props,
    wrapper,
  }
}

describe('Text', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

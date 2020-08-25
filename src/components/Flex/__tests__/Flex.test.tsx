import React from 'react'
import { shallow } from 'enzyme'

import { Flex } from '..'

const setup = (testProps = {}) => {
  const props = Object.assign({}, testProps)

  const wrapper = shallow(<Flex {...props}>Hello World</Flex>)

  return {
    props,
    wrapper,
  }
}

describe('Flex', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

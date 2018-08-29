import React from 'react'
import { shallow } from 'enzyme'

import { CardFooter } from '..'

const setup = (testProps = {}) => {
  const props = Object.assign(testProps)

  const wrapper = shallow(<CardFooter {...props}>Hello World!</CardFooter>)

  return {
    props,
    wrapper,
  }
}

describe('CardFooter', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

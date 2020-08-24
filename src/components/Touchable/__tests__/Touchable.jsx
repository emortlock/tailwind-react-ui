import React from 'react'
import { shallow } from 'enzyme'

import { Touchable } from '..'

const setup = (testProps = {}) => {
  const props = Object.assign({}, testProps)

  const wrapper = shallow(<Touchable {...props}>Hello World</Touchable>)

  return {
    props,
    wrapper,
  }
}

describe('Touchable', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'

import { Box } from '..'

const setup = (testProps = {}) => {
  const props = Object.assign({}, testProps)

  const wrapper = shallow(<Box {...props}>Hello World</Box>)

  return {
    props,
    wrapper,
  }
}

describe('Box', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

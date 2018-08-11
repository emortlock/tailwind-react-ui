import React from 'react'
import { shallow } from 'enzyme'

import { Button } from '..'

const setup = (testProps = {}) => {
  const props = Object.assign(testProps)

  const wrapper = shallow(<Button {...props}>Submit</Button>)

  return {
    props,
    wrapper,
  }
}

describe('Button', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup({ fill: true })

    expect(wrapper).toMatchSnapshot()
  })
})

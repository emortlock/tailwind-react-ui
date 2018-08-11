import React from 'react'
import { shallow } from 'enzyme'

import { CardBody } from '..'

const setup = (testProps = {}) => {
  const props = Object.assign(testProps)

  const wrapper = shallow(<CardBody {...props}>Hello World!</CardBody>)

  return {
    props,
    wrapper,
  }
}

describe('CardBody', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

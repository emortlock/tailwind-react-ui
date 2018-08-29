import React from 'react'
import { shallow } from 'enzyme'

import { component as CardBody } from '../CardBody'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

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

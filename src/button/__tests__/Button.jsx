import React from 'react'
import { shallow } from 'enzyme'

import { component as Button } from '../Button'

import { defaultConfig } from '../../config'

const setup = (testProps = {}) => {
  const props = Object.assign({ config: defaultConfig }, testProps)

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

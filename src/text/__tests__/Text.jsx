import React from 'react'
import { shallow } from 'enzyme'

import { component as Text } from '../Text'
import { defaultConfig } from '../../config'

const setup = (testProps = {}) => {
  const props = Object.assign({ config: defaultConfig }, testProps)

  const wrapper = shallow(<Text {...props}>Lorem ipsum dolor sit amet</Text>)

  return {
    props,
    wrapper,
  }
}

describe('Text', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup({ p: true })

    expect(wrapper).toMatchSnapshot()
  })
})

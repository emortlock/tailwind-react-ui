import React from 'react'
import { shallow } from 'enzyme'

import { component as Text } from '../Text'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = shallow(<Text {...props}>Lorem ipsum dolor sit amet</Text>)

  return {
    props,
    wrapper,
  }
}

describe('Text', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup({ is: 'p' })

    expect(wrapper).toMatchSnapshot()
  })
})

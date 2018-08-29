import React from 'react'
import { shallow } from 'enzyme'

import { component as Title } from '../Title'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = shallow(<Title {...props}>Title</Title>)

  return {
    props,
    wrapper,
  }
}

describe('Title', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup({ size: 3 })

    expect(wrapper).toMatchSnapshot()
  })
})

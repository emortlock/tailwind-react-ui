import React from 'react'
import { shallow } from 'enzyme'

import { Image } from '..'

const setup = (testProps = {}) => {
  const props = Object.assign({ src: '/static/assets/tubgirl.gif' }, testProps)

  const wrapper = shallow(<Image {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('Image', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

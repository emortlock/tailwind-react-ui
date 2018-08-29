import React from 'react'
import { shallow } from 'enzyme'

import { component as ContentTitle } from '../ContentBlock'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = shallow(<ContentTitle {...props}>Title</ContentTitle>)

  return {
    props,
    wrapper,
  }
}

describe('ContentBlock', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

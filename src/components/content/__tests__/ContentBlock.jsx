import React from 'react'
import { shallow } from 'enzyme'

import { component as ContentBlock } from '../ContentBlock'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = shallow(
    <ContentBlock {...props}>Lorem ipsum...</ContentBlock>,
  )

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

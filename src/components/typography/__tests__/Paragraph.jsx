import React from 'react'
import { shallow } from 'enzyme'

import { component as Paragraph } from '../Paragraph'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = shallow(
    <Paragraph {...props}>Lorem ipsum dolor sit amet</Paragraph>,
  )

  return {
    props,
    wrapper,
  }
}

describe('Paragraph', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup({ is: 'p' })

    expect(wrapper).toMatchSnapshot()
  })
})

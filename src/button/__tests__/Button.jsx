import React from 'react'
import { shallow } from 'enzyme'

import { component as Button } from '../Button'

import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = shallow(<Button {...props}>Submit</Button>)

  return {
    props,
    wrapper,
  }
}

describe('Button', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup({
      buttonStyle: 'fill',
      bg: 'blue',
      text: 'white',
    })

    expect(wrapper).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'

import { component as Container } from '../Container'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = shallow(<Container {...props}>Content</Container>)

  return {
    props,
    wrapper,
  }
}

describe('Container', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup({ padding: 'lg' })

    expect(wrapper).toMatchSnapshot()
  })
})

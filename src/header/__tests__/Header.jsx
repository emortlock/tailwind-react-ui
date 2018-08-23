import React from 'react'
import { shallow } from 'enzyme'

import { component as Header } from '../Header'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = shallow(<Header {...props}>Content</Header>)

  return {
    props,
    wrapper,
  }
}

describe('Header', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup({ bg: 'blue', text: 'white' })

    expect(wrapper).toMatchSnapshot()
  })
})

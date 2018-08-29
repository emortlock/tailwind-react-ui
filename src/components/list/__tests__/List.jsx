import React from 'react'
import { shallow } from 'enzyme'

import { component as List } from '../List'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = shallow(
    <List inline {...props}>
      <span>One</span>
      <span>Two</span>
      <span>Three</span>
    </List>,
  )

  return {
    props,
    wrapper,
  }
}

describe('List', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

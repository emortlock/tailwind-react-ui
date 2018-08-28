import React from 'react'
import { shallow } from 'enzyme'

import Main from '../Main'

const setup = (testProps = {}) => {
  const props = Object.assign(testProps)

  const wrapper = shallow(<Main {...props}>Lorem ipsum</Main>)

  return {
    props,
    wrapper,
  }
}

describe('Main', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

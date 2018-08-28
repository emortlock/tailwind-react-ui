import React from 'react'
import { shallow } from 'enzyme'

import Aside from '../Aside'

const setup = (testProps = {}) => {
  const props = Object.assign(testProps)

  const wrapper = shallow(<Aside {...props}>Lorem ipsum...</Aside>)

  return {
    props,
    wrapper,
  }
}

describe('Aside', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

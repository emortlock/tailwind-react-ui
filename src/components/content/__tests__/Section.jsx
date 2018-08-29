import React from 'react'
import { shallow } from 'enzyme'

import Section from '../Section'

const setup = (testProps = {}) => {
  const props = Object.assign(testProps)

  const wrapper = shallow(<Section {...props}>Lorem ipsum...</Section>)

  return {
    props,
    wrapper,
  }
}

describe('Section', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

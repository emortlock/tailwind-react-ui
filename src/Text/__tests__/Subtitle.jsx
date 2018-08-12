import React from 'react'
import { shallow } from 'enzyme'

import { Subtitle } from '..'

const setup = (testProps = {}) => {
  const props = Object.assign({}, testProps)

  const wrapper = shallow(<Subtitle {...props}>Subtitle</Subtitle>)

  return {
    props,
    wrapper,
  }
}

describe('Subtitle', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup({ size: 3 })

    expect(wrapper).toMatchSnapshot()
  })
})

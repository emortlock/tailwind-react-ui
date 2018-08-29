import React from 'react'
import { shallow } from 'enzyme'

import { Col } from '..'

const setup = (testProps = {}) => {
  const props = Object.assign({}, testProps)

  const wrapper = shallow(<Col {...props}>Content</Col>)

  return {
    props,
    wrapper,
  }
}

describe('Col', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup({ size: { def: 'full', sm: '1/2', md: '1/4' } })

    expect(wrapper).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'

import { component as Container } from '../Container'
import { defaultConfig } from '../../config'

const setup = (testProps = {}) => {
  const props = Object.assign({ config: defaultConfig }, testProps)

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

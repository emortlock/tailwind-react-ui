import React from 'react'
import { shallow } from 'enzyme'

import { component as Title } from '../Title'
import { defaultConfig } from '../../config'

const setup = (testProps = {}) => {
  const props = Object.assign({ config: defaultConfig }, testProps)

  const wrapper = shallow(<Title {...props}>Title</Title>)

  return {
    props,
    wrapper,
  }
}

describe('Title', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup({ size: 3 })

    expect(wrapper).toMatchSnapshot()
  })
})

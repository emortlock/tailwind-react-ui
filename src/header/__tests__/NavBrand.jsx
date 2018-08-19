import React from 'react'
import { shallow } from 'enzyme'

import { component as NavBrand } from '../NavBrand'
import { defaultConfig } from '../../config'

const setup = (testProps = {}) => {
  const props = Object.assign({ config: defaultConfig }, testProps)

  const wrapper = shallow(<NavBrand {...props}>Tailwind React</NavBrand>)

  return {
    props,
    wrapper,
  }
}

describe('NavBrand', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

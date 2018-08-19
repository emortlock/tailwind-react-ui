import React from 'react'
import { shallow } from 'enzyme'

import { component as Header } from '../Header'
import { defaultConfig } from '../../config'

const setup = (testProps = {}) => {
  const props = Object.assign({ config: defaultConfig }, testProps)

  const wrapper = shallow(<Header {...props}>Content</Header>)

  return {
    props,
    wrapper,
  }
}

describe('Header', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

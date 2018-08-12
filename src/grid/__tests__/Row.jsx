import React from 'react'
import { shallow } from 'enzyme'

import { component as Row } from '../Row'
import { defaultConfig } from '../../config'

const setup = (testProps = {}) => {
  const props = Object.assign({ config: defaultConfig }, testProps)

  const wrapper = shallow(<Row {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('Row', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup({ gutter: true })

    expect(wrapper).toMatchSnapshot()
  })
})

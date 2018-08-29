import React from 'react'
import { shallow } from 'enzyme'

import { component as Row } from '../Row'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

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

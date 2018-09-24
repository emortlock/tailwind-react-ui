import React from 'react'
import { shallow } from 'enzyme'

import { component as NumberInput } from '../NumberInput'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign(
    { theme: defaultTheme, name: 'username' },
    testProps,
  )

  const wrapper = shallow(<NumberInput {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('NumberInput', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

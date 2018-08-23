import React from 'react'
import { shallow } from 'enzyme'

import { component as TextInput } from '../TextInput'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign(
    { theme: defaultTheme, name: 'username' },
    testProps,
  )

  const wrapper = shallow(<TextInput {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('TextInput', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

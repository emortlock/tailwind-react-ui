import React from 'react'
import { shallow } from 'enzyme'

import { component as TextInput } from '../TextInput'
import { defaultConfig } from '../../config'

const setup = (testProps = {}) => {
  const props = Object.assign(
    { config: defaultConfig, name: 'username' },
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

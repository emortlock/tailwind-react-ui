import React from 'react'
import { shallow } from 'enzyme'

import { component as TextArea } from '../TextArea'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign(
    { theme: defaultTheme, name: 'username' },
    testProps,
  )

  const wrapper = shallow(<TextArea {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('TextArea', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

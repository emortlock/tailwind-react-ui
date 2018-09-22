import React from 'react'
import { shallow } from 'enzyme'

import { component as OptionInput } from '../OptionInput'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign(
    { theme: defaultTheme, name: 'test', value: 'test-1', label: 'Test?' },
    testProps,
  )

  const wrapper = shallow(<OptionInput {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('OptionInput', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup({ defaultChecked: true })

    expect(wrapper).toMatchSnapshot()
  })
})

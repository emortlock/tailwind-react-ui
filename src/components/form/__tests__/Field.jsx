import React from 'react'
import { shallow } from 'enzyme'

import { component as Field } from '../Field'
import { defaultTheme } from '../../theme'

import Label from '../Label'
import TextInput from '../TextInput'
import HelpText from '../HelpText'
import ErrorText from '../ErrorText'

const setup = (testProps = {}) => {
  const props = Object.assign(
    { theme: defaultTheme, hasError: true, hasHelp: true },
    testProps,
  )

  const wrapper = shallow(
    <Field {...props}>
      <Label>Password</Label>
      <HelpText>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </HelpText>
      <TextInput name="password" type="password" />
      <ErrorText>Please complete</ErrorText>
    </Field>,
  )

  return {
    props,
    wrapper,
  }
}

describe('Field', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})

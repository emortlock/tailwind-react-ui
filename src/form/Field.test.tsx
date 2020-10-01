import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawField as Field } from './Field'
import { defaultTheme } from '../theme'

import { Label } from './Label'
import { TextInput } from './TextInput'
import { HelpText } from './HelpText'
import { ErrorText } from './ErrorText'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(
    { theme: defaultTheme, hasError: true, hasHelp: true },
    testProps,
  )

  const wrapper = render(
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

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Field', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})

Common behaviour can be provided through the use of the `Field` component.

### Help

```jsx
import { Field, Label, HelpText, TextInput } from 'tailwind-react-ui'
;<>
  <Field hasHelp>
    <Label>Password</Label>
    <HelpText>
      Your password must be 8-20 characters long, contain letters and numbers,
      and must not contain spaces, special characters, or emoji.
    </HelpText>
    <TextInput name="password" type="password" />
  </Field>
</>
```

#### Disabled

```jsx
import { Field, Label, TextInput } from 'tailwind-react-ui'
;<>
  <Field disabled>
    <Label>Username</Label>
    <TextInput name="disabled" placeholder="Username" />
  </Field>
</>
```

### Errors

```jsx
import { Field, Label, ErrorText, TextInput } from 'tailwind-react-ui'
;<>
  <Field hasError>
    <Label>Username</Label>
    <TextInput name="invalid" placeholder="Username" />
    <ErrorText>Please enter a valid username</ErrorText>
  </Field>
</>
```

### Text Inputs

```jsx
<Field hasHelp>
  <Label>Password</Label>
  <HelpText>
    Your password must be 8-20 characters long, contain letters and numbers, and
    must not contain spaces, special characters, or emoji.
  </HelpText>
  <TextInput name="password" type="password" />
</Field>
```

#### Disabled

```jsx
<Field disabled>
  <Label>Username</Label>
  <TextInput name="disabled" placeholder="Username" />
</Field>
```

#### Validation Error:

```jsx
<Field hasError>
  <Label>Username</Label>
  <TextInput name="invalid" placeholder="Username" />
  <ErrorText>Please enter a valid username</ErrorText>
</Field>
```

### Select

```jsx
<Field>
  <Label>Favourite Ninja Turtle</Label>
  <Select
    name="select"
    options={[
      { value: 'leo', label: 'Leonardo' },
      { value: 'mike', label: 'Michelangelo' },
      { value: 'don', label: 'Donatello' },
      { value: 'raph', label: 'Raphael' },
    ]}
  />
</Field>
```

### Radio

```jsx
<Radio name="option-input" value="unselected" label="Unselected" />
<Radio name="option-input" value="selected" label="Selected" defaultChecked />
<Radio name="option-input-2" value="unselected" label="Unselected disabled" disabled />
<Radio name="option-input-2" value="selected" label="Selected disabled" disabled defaultChecked />
```

### Checkbox

```jsx
<Checkbox checkbox name="option-input-3" value="unselected" label="Unselected" />
<Checkbox checkbox name="option-input-3" value="selected" label="Selected" defaultChecked />
<Checkbox checkbox name="option-input-4" value="unselected" label="Unselected disabled" disabled />
<Checkbox checkbox name="option-input-4" value="selected" label="Selected disabled" disabled defaultChecked />
```

### Option List

```jsx
<OptionField>
  <OptionLabel>Do you agree to us contacting you?</OptionLabel>
  <OptionList name="agree">
    <Radio value="yes" label="Yes" />
    <Radio value="no" label="No" />
    <Radio value="maybe" label="Maybe" />
  </OptionList>
</OptionField>
```

```jsx
<OptionField>
  <OptionLabel>How should we contact you?</OptionLabel>
  <OptionList name="contact" checkbox>
    <Checkbox value="email" label="Email" />
    <Checkbox value="tel" label="Telephone" />
    <Checkbox value="post" label="Post" />
  </OptionList>
</OptionField>
```

#### Inline list

```jsx
<OptionField>
  <OptionLabel>Do you agree to us contacting you?</OptionLabel>
  <OptionList inline name="agree">
    <Radio value="yes" label="Yes" />
    <Radio value="no" label="No" />
    <Radio value="maybe" label="Maybe" />
  </OptionList>
</OptionField>
```

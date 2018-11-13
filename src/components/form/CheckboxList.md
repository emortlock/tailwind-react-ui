```jsx
<OptionField>
  <OptionLabel>How should we contact you?</OptionLabel>
  <CheckboxList name="contact">
    <Checkbox value="email" label="Email" />
    <Checkbox value="tel" label="Telephone" />
    <Checkbox value="post" label="Post" />
  </CheckboxList>
</OptionField>
```

### Inline

```jsx
<OptionField>
  <OptionLabel>Do you agree to us contacting you?</OptionLabel>
  <CheckboxList inline name="agree">
    <Checkbox value="yes" label="Yes" />
    <Checkbox value="no" label="No" />
    <Checkbox value="maybe" label="Maybe" />
  </CheckboxList>
</OptionField>
```

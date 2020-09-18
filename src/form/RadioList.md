```jsx
import {
  OptionField,
  OptionLabel,
  RadioList,
  Radio,
  Checkbox,
} from 'tailwind-react-ui'
;<>
  <OptionField>
    <OptionLabel>Do you agree to us contacting you?</OptionLabel>
    <RadioList name="agree">
      <Radio value="yes" label="Yes" />
      <Radio value="no" label="No" />
      <Radio value="maybe" label="Maybe" />
    </RadioList>
  </OptionField>
</>
```

#### Inline list

```jsx
import {
  OptionField,
  OptionLabel,
  RadioList,
  Radio,
  Checkbox,
} from 'tailwind-react-ui'
;<>
  <OptionField>
    <OptionLabel>Do you agree to us contacting you?</OptionLabel>
    <RadioList inline name="agree">
      <Radio value="yes" label="Yes" />
      <Radio value="no" label="No" />
      <Radio value="maybe" label="Maybe" />
    </RadioList>
  </OptionField>
</>
```

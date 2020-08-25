Once installed you can import the components and use them as you would any other.

```jsx static
import React from 'react'
import { Touchable } from 'tailwind-react-ui'

const MyButton = () => (
  <Touchable rounded bg="blue-400" p={{ x: 4, y: 2 }} text="white">
    Submit
  </FillButton>
)
```

Which when output on the page would give you the following.

```jsx
import { Touchable } from 'tailwind-react-ui'
;<>
  <Touchable rounded bg="blue-400" p={{ x: 4, y: 2 }} text="white">
    Submit
  </Touchable>
</>
```

### Tailwind Props

Each of the components make use of a shared `Base` component which translates the TailwindCSS class structure into a React props api. Take a look at the example below to see how common attributes can be compiled together:

```jsx
import { Base } from 'tailwind-react-ui'
;<>
  <Base
    bg="blue-100"
    p={{ x: 4, y: 2 }}
    shadow
    text={['xl', 'blue-500', 'center']}
    font="bold"
    w="1/2"
    m={{ x: 'auto' }}
    rounded
  >
    Hello World
  </Base>
</>
```

#### Responsive and State Variants

By adding a suffix to the above properties with a breakpoint or state separated with a `-` you can tie a particular prop to a variant qualifier. The below example will change colour as the screen size changes along with interacting to being hovered.

```jsx
import { Base } from 'tailwind-react-ui'
;<>
  <Base flex justify="center">
    <Base
      flex
      justify="center"
      items="center"
      bg="purple-400"
      bg-sm="green-400"
      bg-md="blue-400"
      bg-lg="red-400"
      bg-xl="orange-400"
      text="white"
      text-md="yellow-400"
      rounded="full"
      shadow-hover="lg"
      w={24}
      h={24}
    >
      Tailwind
    </Base>
  </Base>
</>
```

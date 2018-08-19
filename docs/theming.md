Tailwind React uses [React context](https://reactjs.org/docs/context.html) in order to determine what class names to use when applying cosmetic styles to components. Using `TailwindConfigProvider` you can set your desired styling which will be used by all Tailwind React components nested within.

```jsx static
import { TailwindConfigProvider, Button } from 'tailwind-react'

const MyApp = () => (
  <TailwindConfigProvider
    config={{
      baseColors: {
        primaryDark: 'red-dark',
        primary: 'red',
      },
    }}
  >
    <Button fill>Red button</Button>
  </TailwindConfigProvider>
)
```

Which would change the default blue colouring on the button to instead use the `.bg-red` class.

### Default config

Obviously there's a fair bit more customisation on offer than just a button colour, but by using the `TailwindConfigProvider` wrapper around the React context provider you can override as much or as little as you need.

See below for the default values used by components:

```js noeditor
<pre>{JSON.stringify(defaultConfig, null, 1)}</pre>
```

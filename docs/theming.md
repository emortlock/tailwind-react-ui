Tailwind React uses [React context](https://reactjs.org/docs/context.html) in order to determine what class names to use when applying cosmetic styles to components. Using `TailwindThemeProvider` you can set your desired styling which will be used by all Tailwind React components nested within.

```jsx static
import { TailwindThemeProvider, Button } from 'tailwind-react'

const MyApp = () => (
  <TailwindThemeProvider
    config={{
      baseColors: {
        primary: 'red',
      },
    }}
  >
    <Button fill>Red button</Button>
  </TailwindThemeProvider>
)
```

Which would change the default blue colouring on the button to instead use the `.bg-red` class.

### Default theme

Obviously there's a fair bit more customisation on offer than just a button colour, but by using the `TailwindThemeProvider` wrapper around the React context provider you can override as much or as little as you need.

See below for the default values used by components:

```js noeditor
<pre>{JSON.stringify(defaultTheme, null, 1)}</pre>
```

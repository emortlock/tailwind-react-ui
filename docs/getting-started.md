Tailwind React provides ready built components that make use of the [Tailwind CSS](https://tailwindcss.com/) framework.

From https://tailwindcss.com/docs/what-is-tailwind:

> Creating a framework for building custom UIs means you can't provide abstractions at the usual level of buttons, forms, cards, navbars, etc.
> Instead, Tailwind provides highly composable, low-level utility classes that make it easy to build complex user interfaces.

Tailwind React leverages these utility classes to provide base level components that are common across various projects, whilst still offering the ability to customise the output to match your project's style.

### Installation

To install the [npm package](https://www.npmjs.com/package/@eddm/tailwind-react) run the following within your project.

```bash
npm i @eddm/tailwind-react
```

#### Webpack Alias

In order to simplify your import calls it would be worthwhile making use of the `alias` functionality in Webpack to avoid needing to use the scope within your component files:

You can do this by adding the following to your `webpack.config.js`

```js static
{
  resolve: {
    alias: {
      'tailwind-react': '@eddm/tailwind-react'
    }
  }
}
```

Note that this may also require changes to your eslint `import/resolver` & jest `moduleNameMapper` settings values depending on your set up.

If you'd prefer not to do this step, be sure to change any import calls taken from the docs so they follow `import { } from '@eddm/tailwind-react'` when applying them to your project.

### Usage

Once installed you can import the components and use them as you would any other.

```jsx static
import React from 'react'
import { Button } from 'tailwind-react'

const MyButton = () => <Button fill>Submit</Button>
```

Which when output on the page would give you the following.

```jsx
<Button fill>Submit</Button>
```

To install the [npm package](https://www.npmjs.com/package/@eddm/tailwind-react) run the following within your project directory.

```bash
npm i @eddm/tailwind-react
```

Note that the library doesn't provide any styling out of the box, `tailwindcss` is a peer dependency so it's necessary to also follow the instructions at https://tailwindcss.com/docs/installation.

### Webpack Alias

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

### TailwindCSS Plugins

React Tailwind makes use of plugins to add additional functionality within components (e.g. a `.visually-hidden` utility class to render content for screen readers only).

```js static
const plugins = require('@eddm/tailwind-react/plugins')

module.exports = {
  // ...project config
  plugins: [
    require('tailwindcss/plugins/container')({}),
    ...Object.keys(plugins).map(name => plugins[name]()),
  ],
}
```

### PurgeCSS

If you are using [PurgeCSS](https://github.com/FullHuman/purgecss) and have issues with it stripping out class names used by Tailwind React you can use the `createClassList` method as part of your `whitelist` setting:

```js static
import { createClassList } from 'tailwind-react'

new PurgecssPlugin({
  whitelist: [
    'html',
    'body',
    ...createClassList({
      // project's tailwind-react config
    }),
  ],
  paths: glob.sync([
    path.join(__dirname, '/src/**/*.js'),
    path.join(__dirname, '/src/**/*.jsx'),
  ]),
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ['html', 'js', 'jsx'],
    },
  ],
})
```

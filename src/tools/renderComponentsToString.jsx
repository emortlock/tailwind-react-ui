import React from 'react'
import ReactDOMServer from 'react-dom/server'
import * as lib from '..'

export default (projectTheme = {}) => {
  const { TailwindThemeProvider } = lib

  return ReactDOMServer.renderToStaticMarkup(
    <TailwindThemeProvider theme={projectTheme}>
      {Object.keys(lib).map(key => {
        if (/^[a-z]/.test(key) || key.startsWith('TailwindTheme')) {
          return false
        }

        const Component = lib[key]

        return <Component />
      })}
    </TailwindThemeProvider>,
  )
}

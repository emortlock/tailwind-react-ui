import getThemeWhitelist from './getThemeWhitelist'
import renderComponentsToString from './renderComponentsToString'

import { classRegex } from './TailwindReactExtractor'

export default (projectTheme = {}, projectWhitelist = []) => {
  const components = renderComponentsToString(projectTheme)
  // eslint-disable-next-line no-useless-escape
  const componentWhitelist = components.match(classRegex) || []

  return [
    ...componentWhitelist,
    ...getThemeWhitelist(projectTheme),
    ...projectWhitelist,
  ].filter((className, index, array) => array.indexOf(className) === index)
}

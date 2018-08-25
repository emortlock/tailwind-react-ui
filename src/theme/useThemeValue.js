import { tailwindPropToClassName } from '../tailwind'

export default (prefix, value, userClassNames = '') => {
  if (userClassNames.includes(prefix)) {
    return false
  }

  return tailwindPropToClassName(prefix, value)
}

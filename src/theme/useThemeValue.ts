import { tailwindPropToClassName } from 'tailwind-react-primitives'

export const useThemeValue = (
  prefix: string,
  value: unknown,
  userClassNames = '',
) => {
  if (userClassNames.includes(prefix)) {
    return false
  }

  return tailwindPropToClassName(prefix, value)
}

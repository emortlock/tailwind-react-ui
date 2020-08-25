import getAsArray from '../getAsArray'

const splitProp = (prop: string) => {
  const utility = prop.substring(prop.indexOf(':') + 1)

  return prop.indexOf(':') !== -1
    ? { utility, variant: prop.substring(0, prop.indexOf(':')) }
    : { utility }
}

const createClassName = ({
  utility,
  value,
  variant,
  prefix = '',
}: {
  utility: string
  value?: unknown
  variant?: string
  prefix?: string
}) =>
  `${variant ? `${variant}:` : ''}${prefix}${utility}${
    value !== false && value !== undefined ? `-${value}` : ''
  }`

export default (prop: string, values: unknown, prefix?: string): string => {
  const { utility, variant } = splitProp(prop)

  if (typeof values === 'boolean') {
    return createClassName({ utility, variant, prefix })
  }

  if (values && typeof values === 'object' && !Array.isArray(values)) {
    return Object.keys(values)
      .map((key) =>
        createClassName({
          prefix,
          utility: `${utility}${key}`,
          variant,
          value: values[key as keyof typeof values],
        }),
      )
      .join(' ')
  }

  return getAsArray(values)
    .map((value) => {
      if (value === false || typeof value === 'undefined') {
        return ''
      }

      if (typeof value === 'boolean') {
        return createClassName({ utility, variant, prefix })
      }

      return createClassName({
        prefix,
        utility,
        variant,
        value: utility !== value ? value : undefined,
      })
    })
    .filter((value) => !!value)
    .join(' ')
}

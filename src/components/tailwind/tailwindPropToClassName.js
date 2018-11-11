const getArray = value => (Array.isArray(value) ? value : [value])

const splitProp = prop => {
  const utility = prop.substring(prop.indexOf(':') + 1)

  return prop.indexOf(':') !== -1
    ? { utility, variant: prop.substring(0, prop.indexOf(':')) }
    : { utility }
}

const createClassName = ({ utility, value, variant, prefix = '' }) =>
  `${variant ? `${variant}:` : ''}${prefix}${utility}${
    value !== false && value !== undefined ? `-${value}` : ''
  }`

export default (prop, values, prefix) => {
  const propType = typeof values

  if (!propType) return ''

  const { utility, variant } = splitProp(prop)

  if (propType === 'boolean') {
    return createClassName({ utility, variant, prefix })
  }

  if (propType === 'object' && !Array.isArray(values)) {
    return Object.keys(values).map(key =>
      createClassName({
        prefix,
        utility: `${utility}${key}`,
        variant,
        value: values[key],
      }),
    )
  }

  return getArray(values)
    .map(value => {
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
    .filter(value => !!value)
    .join(' ')
}

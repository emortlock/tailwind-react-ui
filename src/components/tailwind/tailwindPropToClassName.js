const getArray = value => (Array.isArray(value) ? value : [value])

export default (prop, values) => {
  const propType = typeof values

  if (!propType) return ''

  if (propType === 'boolean') return `${prop}`

  if (propType === 'object' && !Array.isArray(values)) {
    return Object.keys(values).map(key => `${prop}${key}-${values[key]}`)
  }

  return getArray(values)
    .map(value => {
      const type = prop.indexOf(':')
        ? prop.substring(prop.indexOf(':') + 1)
        : prop

      return (
        value !== false &&
        typeof value !== 'undefined' &&
        `${prop}${
          type !== value && typeof value !== 'boolean' ? `-${value}` : ''
        }`
      )
    })
    .filter(value => !!value)
    .join(' ')
}

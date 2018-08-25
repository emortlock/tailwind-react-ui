const getArray = value => (Array.isArray(value) ? value : [value])

export default (prop, values) => {
  const propType = typeof values

  if (propType === 'boolean') return `${prop}`

  if (propType === 'object' && !Array.isArray(values)) {
    return Object.keys(values).map(key => `${prop}${key}-${values[key]}`)
  }

  return getArray(values)
    .map(value => {
      const type = prop.indexOf(':')
        ? prop.substring(prop.indexOf(':') + 1)
        : prop

      return `${prop}${type !== value ? `-${value}` : ''}`
    })
    .join(' ')
}

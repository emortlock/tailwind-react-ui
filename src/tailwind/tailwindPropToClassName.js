const getArray = value => (Array.isArray(value) ? value : [value])

export default (prop, values) => {
  switch (typeof values) {
    case 'boolean':
      return `${prop}`
    case 'object':
      return Object.keys(values).map(key => `${prop}${key}-${values[key]}`)
    default:
      return getArray(values)
        .map(value => {
          const type = prop.indexOf(':')
            ? prop.substring(prop.indexOf(':') + 1)
            : prop

          return `${prop}${type !== value ? `-${value}` : ''}`
        })
        .join(' ')
  }
}

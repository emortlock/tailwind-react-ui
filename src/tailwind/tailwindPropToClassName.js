const getArray = value => (Array.isArray(value) ? value : [value])

export default (prop, values) =>
  typeof values === 'boolean'
    ? `${prop}`
    : getArray(values)
        .map(value => {
          const type = prop.indexOf(':')
            ? prop.substring(prop.indexOf(':') + 1)
            : prop

          return `${prop}${type !== value ? `-${value}` : ''}`
        })
        .join(' ')

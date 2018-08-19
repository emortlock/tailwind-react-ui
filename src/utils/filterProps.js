import includes from 'lodash.includes'

export default (componentProps, filterList) =>
  Object.keys(componentProps).reduce((newProps, prop) => {
    if (includes(filterList, prop)) {
      return newProps
    }
    return {
      ...newProps,
      [prop]: componentProps[prop],
    }
  }, {})

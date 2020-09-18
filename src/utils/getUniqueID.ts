import uniqueId from 'lodash.uniqueid'

export const getUniqueID = (prefix: string) => uniqueId(`${prefix}-`)

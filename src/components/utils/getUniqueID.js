import uniqueId from 'lodash.uniqueid'

export default prefix => uniqueId(`${prefix}-`)

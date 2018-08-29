import * as library from '../src'

Object.keys(library).forEach(key => {
  global[key] = library[key]
})

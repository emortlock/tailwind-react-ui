import * as library from '../src'
console.log('whaat', library)
Object.keys(library).forEach(key => {
  console.log(key)

  global[key] = library[key]
})

console.log(global.Label)

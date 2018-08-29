import fs from 'fs'
import path from 'path'

describe('Library index', () => {
  const lib = fs.readFileSync(path.join(__dirname, '..', 'index.js'), 'utf8')
  const components = fs.readdirSync(path.join(__dirname, '..', 'components'))

  components.forEach(component => {
    if (!component.startsWith('_') && !component.includes('.')) {
      it(`exposes ${component} for import`, () => {
        expect(lib.match(new RegExp(component, 'g'))).not.toBe(null)
      })
    }
  })
})

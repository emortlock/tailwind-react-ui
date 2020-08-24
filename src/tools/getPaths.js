import path from 'path'
import fs from 'fs'
import { name } from '../../package.json'

const basePath = __dirname.replace(new RegExp(`${name}/.*`), name)

const components = fs.readdirSync(path.resolve(basePath, 'src/components'))

export default () =>
  components.map((component) =>
    path.join(basePath, `src/components/${component}/*.jsx`),
  )

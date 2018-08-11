const ghpages = require('gh-pages')
const repository = require('../package.json').repository.url

ghpages.publish('styleguide', {
  repo: `https://${process.env.GH_TOKEN}@${repository.replace('git+https://')}`,
  silent: true,
})

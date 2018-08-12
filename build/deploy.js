const ghpages = require('gh-pages')
const repository = require('../package.json').repository.url

const { GH_USERNAME, GH_EMAIL, GH_TOKEN } = process.env

ghpages.publish('styleguide', {
  repo: `https://${GH_TOKEN}@${repository.replace('git+https://', '')}`,
  // silent: true,
  message: 'Deploy to GitHub pages [ci skip]',
  user: {
    name: GH_USERNAME,
    email: GH_EMAIL,
  },
})

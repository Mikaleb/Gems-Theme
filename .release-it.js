const pjson = require('./package.json')

module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
    changelog:
      'npx auto-changelog --stdout --commit-limit false -u --template https://raw.githubusercontent.com/release-it/release-it/master/templates/changelog-compact.hbs',
  },
  github: {
    release: true,
  },
  hooks: {
    'after:bump': 'npx auto-changelog -p',
    'after:release': `vsce publish ${pjson.version}`,
  },
  npm: {
    publish: false,
  },
}
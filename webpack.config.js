const path = require('path')

module.exports = (env = {}) => {
  return {
    mode: 'development',
    entry: {
      [env.prod ? 'test.mini' : 'test']: ['./index.js', './add.js']
    },
    output: {
      path: path.resolve(__dirname, 'dist')
    }
  }
}

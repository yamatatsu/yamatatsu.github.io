const base = require('./webpack.config.js')

module.exports = Object.assign(base, {
  devtool: 'inline-source-map',
  devServer: {
    port: 3500,
    inline: true,
  },
})

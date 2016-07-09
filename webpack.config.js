const production = process.env.NODE_ENV === 'production'
const webpack = require('webpack')
const path = require('path')

const plugins = [
  new webpack.NoErrorsPlugin(),
]
production && plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }))

module.exports = {
  entry: path.join(__dirname, '/src/app.js'),
  resolve: { root: [path.join(__dirname, '/src')] },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/js'),
  },
  module: {
    loaders: [
      { test: /\.js[x]?$/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' },
    ],
  },
  plugins,
}

module.exports = {
  context: __dirname,
  entry: './src/global.js',
  output: {
    path: './dist',
    filename: 'boom.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  }
}

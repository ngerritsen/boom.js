module.exports = {
  context: __dirname,
  entry: './main.js',
  output: {
    path: '.',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  }
}

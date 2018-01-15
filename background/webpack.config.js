const path = require('path');

module.exports = {

  entry: [
    './background/index.js'
  ],

  output: {
    filename: 'event.js',
    path: path.join(__dirname, '../', 'build')
  },

  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: path.join(__dirname, ''),
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

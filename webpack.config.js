const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, '/app/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'app')
        ],
        test: /\.jsx?$/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        } // end query
      }, // end babel-loader
      {
        loader: ExtractTextPlugin.extract('css-loader!sass-loader', 'style-loader'),
        include: [
          path.resolve(__dirname, 'app')
        ],
        test: /\.scss$/
      }
    ] // end loaders
  } // end module
  // postcss: [
  //     require('autoprefixer')
  // ]
};

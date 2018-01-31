const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  entry: './src/main_index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },

  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {minimize: true}
        }, {
          loader: 'sass-loader?sourceMap'
        }]
      })
    },

    {
      enforce: 'pre',
      test: /\.jsx?$/,
      loader: 'standard-loader',
      exclude: /(node_modules|bower_components)/
    },

    {
      test: /\.pug/,
      loaders: ['pug-loader']
    },

    {
      test: /\.json$/,
      loader: ['json-loader']
    }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'styles.css'
    }),
    new UglifyJsPlugin(),
    new StyleLintPlugin()
  ]
}

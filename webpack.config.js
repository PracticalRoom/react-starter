const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './javascripts/app',
  output: {
    filename: `app${isProduction ? '.[hash]' : ''}.js`,
    path: './dist/server/public/assets',
    publicPath: 'assets'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&import=false&url=false' + '!postcss-loader' + '!sass-loader?includePath=node_modules')
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new ExtractTextPlugin(`app${isProduction ? '.[hash]' : ''}.css`),
    new HtmlPlugin({
      filename: '../../views/react-app.html',
      inject: false,
      template: './app/server/views/react-app.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: `vendor${isProduction ? '.[hash]' : ''}.js`,

      // Move modules installed from npm to a separate vendor.js bundle
      // Thanks http://stackoverflow.com/a/38733864
      minChunks (module) {
        const userRequest = module.userRequest

        if (typeof userRequest !== 'string') {
          return false
        }

        return userRequest.indexOf('node_modules') >= 0
      }
    }),
    isProduction ? (
      new webpack.optimize.UglifyJsPlugin({
        comments: false,
        compress: {
          warnings: true
        },
        mangle: true
      })
    ) : () => {}
  ],
  sassLoader: {
    includePaths: [
      'node_modules'
    ]
  }
};

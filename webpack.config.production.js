var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');

var StripLoader = {
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  loader: WebpackStrip.loader('console.log')
}

devConfig.module.loaders.push(StripLoader);
module.exports = devConfig;

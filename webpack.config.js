module.exports = {
  noInfo: false,
  entry: ["./app.js"],
  output: {
    filename: "bundle.js"
  },

  devServer: { 
    inline: true,
    noInfo: true
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }
}
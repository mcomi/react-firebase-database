/*
* @Author: manolocomi
* @Date:   2016-11-04 16:27:51
* @Last Modified 2016-11-04
* @Last Modified time: 2016-11-04 16:39:35
*/

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    app: ['./src/index.jsx']
  },
  output: {
    path: './build',
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
        // query: {
        //   presets: ['es2015', 'stage-2', 'react']
        // }
      }
    ]
  }
}
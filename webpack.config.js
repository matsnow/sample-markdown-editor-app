const path = require('path');                                                                                                                          
module.exports = { 
  context: path.resolve(__dirname, './src'),
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test:    /\.js$/,
        loader: 'babel-loader',
        options: {presets: [ ['env', {'modules': false}] ]},
        exclude: /node_modules/
      },
      {
        // Sassファイルの読み込みとコンパイル
        test: /\.scss/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]  
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
  }
};

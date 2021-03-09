const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./client/index.tsx'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    publicPath: '/dist/',
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api/**'],
        target: 'http://localhost:3000',
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

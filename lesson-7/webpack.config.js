const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  }
  if (isProd) {
    config.minimizer = [new OptimizeCssAssetPlugin(), new TerserWebpackPlugin()]
  }
  return config
}

module.exports = {
  context: path.resolve(__dirname, 'public'),
  mode: 'development',
  entry: {
    main: './js/main.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.cjs', '.js', '.css', '.json', '.jpg'],
    alias: {
      '@js': path.resolve(__dirname, 'public/js'),
      '@css': path.resolve(__dirname, 'public/css'),
      '@': path.resolve(__dirname, 'public'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'public'),
    port: 3000,
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/img/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
}

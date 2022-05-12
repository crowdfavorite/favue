/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const plugins = [
  new ESLintPlugin({
    extensions: ['js', 'jsx', 'ts', 'tsx'],
  }),
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: [
      'js/*.gz',
      'js/*.js',
      'js/*.txt',
      'js/*.map',
      '*.json',
      'css/*.gz',
      'css/*.txt',
      'css/*.map',
      'css/*.css',
    ],
  }),
  new Dotenv({
    systemvars: true,
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css)$'),
      // threshold: 10240,
      minRatio: 0.8,
    }),
  );
}

module.exports = {
  module: {
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@js': path.resolve(__dirname, './resources/js'),
    },
  },
  plugins,
};

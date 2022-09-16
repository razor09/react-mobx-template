const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { resolve } = require('path');

module.exports = (_, args) => {
  const isDevelopment = args.mode === 'development';
  const isProduction = args.mode === 'production';
  const isLocalEnvironment = args.name === 'local';
  return {
    entry: resolve('src/entry'),
    output: {
      path: resolve('dist'),
      publicPath: '/',
      filename: '[fullhash].js',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new CssMinimizerWebpackPlugin(),
        new TerserWebpackPlugin({
          extractComments: false,
          terserOptions: {
            format: {
              comments: false,
            },
          },
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
        },
        {
          test: /\.scss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: isDevelopment ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:6]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(ttf|svg)$/,
          type: 'asset/resource',
          generator: {
            filename: '[hash].[ext]',
          },
        },
      ],
    },
    devtool: isDevelopment ? 'source-map' : false,
    devServer: {
      host: 'localhost',
      port: 4200,
      historyApiFallback: true,
    },
    plugins: [
      new DefinePlugin({ isLocalEnvironment }),
      new MiniCssExtractPlugin({
        filename: '[fullhash].css',
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico',
      }),
    ],
  };
};

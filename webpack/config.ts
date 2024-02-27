import * as CssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { resolve } from 'path'
import * as TerserWebpackPlugin from 'terser-webpack-plugin'
import { Configuration, DefinePlugin } from 'webpack'
import 'webpack-dev-server'
import * as settings from './settings'
import { Args } from './typings'

export default (_: object, args: Args): Configuration => {
  const isDevelopment = settings.isDevelopment(args)
  const isProduction = settings.isProduction(args)
  const isMocksOn = settings.isMocksOn(args)
  const baseUrl = settings.getBaseUrl(args)
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
          test: /\.(ttf|png)$/,
          type: 'asset/resource',
          generator: {
            filename: '[hash].[ext]',
          },
        },
      ],
    },
    devtool: isDevelopment ? 'source-map' : false,
    devServer: {
      host: settings.host,
      port: settings.port,
      proxy: settings.getProxyConfigArray(args),
      historyApiFallback: true,
    },
    plugins: [
      new DefinePlugin({ isMocksOn, baseUrl }),
      new MiniCssExtractPlugin({
        filename: '[fullhash].css',
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico',
      }),
    ],
  }
}

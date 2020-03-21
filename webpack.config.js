/*
 * @Descripttion:
 * @version: v1
 * @Date: 2020-02-17 17:25:36
 */

'use strict';

const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const pkg = require('./package')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
// 静态资源输出
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // 入口
  entry: {
    index: path.join(__dirname, './src/index.tsx')
  },

  // 出口
  output: {
    path: `${__dirname}/dist/${pkg.version}`,
    //添加hash可以防止文件缓存,每次都会生成4位hash串
    filename: 'bundle.[hash:4].js',
    publicPath: '/'
  },

  devServer: {
    contentBase: "./dist", // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    port: 3000, // 项目所使用的端口
    open: true, // 自动打开浏览器
  },

  // resolve.modules 告诉 webpack 寻找模块时应该从哪些路径查找,
  // resolve.modules 的默认值就是 ["node_modules"], 我写成这样 modules: [APP_PATH] 就不去 "node_modules" 查找了.

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  // 模块加载器
  module: {
    rules: [{
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        // include: ['./src'],
        use: {
          loader: 'babel-loader',
          options: { // babel 转义的配置选项
            babelrc: true, // 使用.babelrc文件
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ]
      },
      {
        test: /\.styl$/,
        include: [/src/],
        use: [{
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'stylus-loader',
        ],
        // include: [path.resolve(__dirname, 'src')],
        // exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        include: [/src/],
        use: [{
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              javascriptEnabled: true, // 选择是ant的支持
              strictMath: true,
              noIeCompat: true
            }
          },
        ],
      },
      {
        // 加载element-theme-default里面的字体
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ]
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, './src/assets'),
      to: './assets',
      ignore: ['.*'],
    }]),

    new CleanWebpackPlugin({
      verbose: true, // 开启在控制台输出信息
      dry: false,
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, `./src/html/index.html`), // 指定模板路径
      filename: 'index.html', // 开发服务器中生成的临时文件
      minify: {
        removeAttributeQuotes: true, // 是否去除文件中的双引号
        collapseWhitespace: true // 是否去除文件中的空行
      },
      inject: true,
      hash: true, //会在打包好的bundle.js后面加上hash串
    })
  ],

  externals: {},
}

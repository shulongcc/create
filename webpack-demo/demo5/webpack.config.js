let path = require('path')
// 安装
let HtmlWebpackPlugin = require('html-webpack-plugin')
// console.log(path.resolve(__dirname, 'dist'))
module.exports = {
  // 入口文件
  entry: './src/index.js',
  output: {
    // 输出文件名
    filename: 'bundle.js',
    // 数据的路径
    // 绝对路径
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  // loader 配置
  module: {
    // 对某周格式文件进行配置
    rules: [
      {
        test: /\.css$/,
        use: [
          // use 数组中的loader的顺序是，从下到上
          // 将js内容插入style标签
          'style-loader',
          // 将css转换为js
          'css-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        // 图片小于8k， base64处理，减少请求数量，增大体积
        options: {
          limit: 8 * 1024,
          // url-loader es解析
          esModule: false,
          // 去图片的前10位
          name: '[hash:10].[ext]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}

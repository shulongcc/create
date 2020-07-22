let path = require('path')
console.log(path.resolve(__dirname, 'dist'))
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
    ],
  },
}

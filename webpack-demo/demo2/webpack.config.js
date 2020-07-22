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
}

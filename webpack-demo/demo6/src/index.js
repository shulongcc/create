import data from './data.json'
import './style.css'
function sum(num, num1) {
  return num + num1
}

console.log(sum(data.num, data.num1))
// 开发环境打包
// webpack ./src/index.js -o ./dist/bundle.js --mode=development
// 生产环境打包
// webpack ./src/index.js -o ./dist/bundle_production.js --mode=production

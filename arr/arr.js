// 判断数组是否包含
const arr = ['钢铁', '队长', '蜘蛛', '浩克', '奇迹']
// indexOf  返回 -1 or 下标 i
// console.log(arr.indexOf('钢铁')) // 0
// includes 返回 true or false
// console.log(arr.includes('浩克')) // true

// 判断数组中符合条件的对象
// ps：寻找多个用filter， 寻找第一次用find
const objArr = [
  { id: 1, name: '钢铁' },
  { id: 2, name: '队长' },
  { id: 3, name: '蜘蛛' },
  { id: 4, name: '浩克' },
  { id: 7, name: '浩克' },
]
// filter 过滤, 返回符合条件的新数组，不改变原数组
// console.log(objArr.filter(item => item.name === '浩克')) // [ { id: 4, name: '浩克' }, { id: 7, name: '浩克' } ]
// find, 查找数组中第一个符合条件的的对象，并返回，不改变原数组
// console.log(objArr.find(item => item.name === '浩克')) // { id: 4, name: '浩克' }
// console.log(objArr)

// 判断对象数组是否存在
const classArr = [
  { id: 1, name: '小明', class: '一班' },
  { id: 2, name: '小红', class: '二班' },
  { id: 3, name: '小蓝', class: '三班' },
]
// find 直接返回找到的第一个对象并返回，不改变原数组
// console.log(classArr.find(item => item.name === '小蓝'))
// some 存在返回 true ，不存在返回false
// console.log(classArr.some(item => item.name === '小红'))

// 筛选数组并添加属性
// ps：筛选广东省的，然后给每个对象加上一个地区属性region
const cities = [
  { city: '广州市', province: '广东省' },
  { city: '深圳市', province: '广东省' },
  { city: '昆明市', province: '云南省' },
  { city: '玉溪市', province: '云南省' },
  { city: '澄江市', province: '云南省' },
]
// filter 不操作原数组，返回新数组  map 返回一个新数组
// Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
// console.log(
//   cities
//     .filter(item => item.province === '云南省')
//     .map(item => Object.assign({}, item, { region: '官渡区' }))
// )
// [
//   { city: '昆明市', province: '云南省', region: '官渡区' },
//   { city: '玉溪市', province: '云南省', region: '官渡区' },
//   { city: '澄江市', province: '云南省', region: '官渡区' }
// ]
// console.log(cities)

// reduce
// console.log(
//   cities.reduce((acc, city) => {
//     return city.province === '广东省'
//       ? acc.concat(Object.assign({}, city, { region: '官渡区' }))
//       : acc
//   }, [])
// )

// shift()  删除数组第一项  并返回第一项内容，操作原数组
// console.log(classArr.shift())
// console.log(classArr)

// pop() 数组末位删除， 并返回末位内容， 操作原数组
// console.log(classArr.pop())

// 数组的插入， 替换， 删除
const arr1 = [1, 2.3, 5, 5, 6, 6, 8, 8, 7, 10]
//  splice 替换 操作原数组，可替换任何位置，  在下标为1，替换一个，替换内容为  "替换"
// console.log(arr1.splice(1, 1, '替换'))
// splice 插入 操作原数组，可在任何位置插入, 在下标为0，插入1个
// console.log(arr1.splice(1, 0, 'add'))
// splice 删除 操作原数组， 从下标为1 的地方删除，删4个元素
// console.log(arr1.splice(1, 4))
// delete 删除数组，删除后的值被empty 代替
// delete arr1[4]
// console.log(arr1)

// 数组检测(检测数组所有元素是否都符合指定条件)
/*
    every()方法测试数组中的所有元素是否都通过了由提供的函数实现的测试。
    every() 方法使用指定函数检测数组中的所有元素：
        如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
        如果所有元素都满足条件，则返回 true。
    every() 不会对空数组进行检测。
    every() 不会改变原始数组。
    对于空数组，它返回true
    语法   :
    array.every(function(currentValue,index,arr), thisValue)
      currentValue:必须。当前元素的值
      index:可选。当前元素的索引值
      arr:可选。当前元素属于的数组对象
      thisValue:可选的。this执行时使用的值callback。
*/
// ps: 通常用于全选和全不选
let checkResult = arr1.every(function(currentVal, index, arr, thisValue) {
  if (currentVal < 5) return false
  else return true
})
// console.log(checkResult)

/*
some()方法测试数组中是否至少有一个元素通过了由提供的函数实现的测试。
语法:array.some(function(currentValue,index,arr),thisValue)
currentValue:   必须。当前元素的值
index:可选。当前元素的索引值
arr:可选。当前元素属于的数组对象
thisValue:this执行时使用的值callback。
空数组返回false
*/
let checkResultSome = arr1.some(function(currentVal, index, arr, thisValue) {
  return currentVal > 8
})
console.log(checkResultSome) // true

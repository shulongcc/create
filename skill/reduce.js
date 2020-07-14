// reduce
// 语法
// arr.reduce(callback, [initialValue])

// callback : prev, cur, index, arr
// prev: 上一次调用的返回值，或者是定义的 initialValue
// cur： 当前值
// index ： 当前值的下标
// arr： 调用的数组

// initialValue ： 初始值

// 基础用法：
// 未定义 initialValue
let arr = [1,2,3,4]

let sum = arr.reduce((prev, cur, index) => {
  // console.log(`返回值：${prev},当前元素：${cur},当前索引${index}`);
  return prev + cur
})
// console.log(sum);

// 定义 initialValue
let sumInitial = arr.reduce((prev, cur, index) => {
  // console.log(`返回值：${prev},当前元素：${cur},当前索引${index}`);
  return prev + cur
}, 0)
// console.log(sumInitial);

// 结论： 
// 如果没定义 initialValue reduce 会跳过索引0 的方法
// 如果定义了 initialValue reduce 会从索引0开始

// 定义initialValue 为arr

let arr1 = []
// let sum1 = arr1.reduce((prev,cur) => {
//   return prev + cur
// })
// 报错 Reduce of empty array with no initial value
// console.log(sum1);

let sumInitial1 = arr1.reduce((prev,cur) => {
  return prev + cur
}, 0)
// console.log(sumInitial1);


// reduce 高级用法

// 计算数组中元素出现的次数
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let nameNum = names.reduce((prev, cur) => {
  if (cur in prev) { //prev 中是否有 cur 属性
    prev[cur]++
  } else {
    prev[cur] = 1 //为 pre 这个对象添加 cur 属性，并且赋值为 1
  }
  return prev
}, {})
// console.log(nameNum);
// { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }

// 数组去重
let newArr = names.reduce((pre, cur) => {
  if (pre.includes(cur)) {
    return pre
  } else {
    return pre.concat(cur)
  }
}, [])
// console.log(newArr);
// 数组去重2 这里使用的是Set的一个特性，集合中不会包含重复项
// Array.from(new Set(names))
// console.log(Array.from(new Set(names)));
// ... + Set
// console.log([...new Set(names)]);

// 数组对象去重
let objArr = [
  {id: 1, name: 'zs', class: '1'},
  {id: 2, name: 'ls', class: '2'},
  {id: 3, name: 'wu', class: '1'},
  {id: 1, name: 'wu', class: '2'},
]
let newObjArr = function (list) {
  const obj = {}
  const arr = list.reduce((pre, cur) =>{
    // 如果obj 中存在id 跳过 ，否则 pre push 当前
    obj[cur.id] ? '' : obj[cur.id] = pre.push(cur)
    // obj[cur.name] ? '' : obj[cur.name] = pre.push(cur)
    // obj[cur.class] ? '' : obj[cur.class] = pre.push(cur)
    // if (obj[cur.id]) {
    //   obj[cur.id] = obj[cur.id]
    // } else {
    //   obj[cur.id] = pre.push(cur)
    // }
    // console.log(obj)
    return pre
  },[])
  return arr
}
// console.log(newObjArr(objArr));

// 将二维数组转化为一维数组

let arr12 = [[0,1], [2,3], [4,5]]
let newArr12 = arr12.reduce((pre, cur) => {
  return pre.concat(cur)
}, [])
// console.log(newArr12);

// 将多维数组转换为 一维数组
let arrn = [[0, 1], [2, 3], [4,[5,6,7]]]
let newArrn = function (arr) {
  return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? newArrn(cur) : cur), [])
}
// console.log(newArrn(arrn));


// 对象里的属性求和
var result = [
  {
      subject: 'math',
      score: 10
  },
  {
      subject: 'chinese',
      score: 20
  },
  {
      subject: 'english',
      score: 30
  }
];

var sumObj = result.reduce(function(prev, cur) {
  return cur.score + prev;
}, 0);
console.log(sumObj) //60
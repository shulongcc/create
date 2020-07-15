// set
// 集合是由一组无序且唯一的项组成，可以想象集合是一个既无重复元素，也没有顺序的概念数组

const s = new Set()
// 数组去重
const arr = [2,2,3,3,4,4,5,5,6,66,7]
// const newArr = arr.forEach(x => s.add(x))
// for(let i of s) {
//   console.log(i);
// }

let array = [...new Set(arr)]
// console.log(array);
// 复习reduce 
let array1 = arr.reduce((pre, cur) => {
  return pre.includes(cur) ? pre : pre.concat(cur)
}, [])
// console.log(array1);

// set 示例属性和方法
// 属性
// size: 返回集合包含元素的数量
// 方法
// 操作方法: 
// add(value) : 向集合添加一个新的项
// delete(value): 从集合中移除一个值
// has(value) : 如果值在集合返回true, 否则返回false
// clear() : 移除集合所有项
// 遍历方法
// keys() : 返回一个包含集合中所有键的数组
// values() : 返回一个包含集合中所有值的数组
// entries: 返回一个包含集合中所有键值对的数组
// forEach(): 用对集合成员执行某种操作,没有返回值

// 实现set
function SetDemo(arr = []) {
  let items = {}
  this.size = 0
  // has(val)
  this.has = function (val) {
    return items.hasOwnProperty(val)
  }
  // add(val)
  this.add = function (val) {
    if (!this.has(val)) {
      items[val] = val
      this.size++
      return true
    }
    return false
  }
  arr.forEach(val => {
    this.add(val);
  });
  // delete(val)
  this.delete = function (val) {
    if (this.has(val)) {
      delete items[val]
      this.size--
      return true
    }
    return false
  }
  // clear
  this.clear = function () {
    items = {}
    this.size = 0
  }
  // keys
  this.keys = function () {
    return Object.keys(items)
  }
  // value
  this.values = function () {
    return Object.values(items)
  }
  // forEach
  this.forEach = function (fn, context = this) {
    for (let i = 0; i < this.size; i++) {
      const item = Object.keys(items)[i]
      fn.call(context,item,item,items) 
    }
  }
  // union 并集
  this.union = function (other) {
    let union = new SetDemo()
    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      union.add(values[i])
    }
    values = other.values()
    for (let i = 0; i < values.length; i++) {
      union.add(values[i])
    }
    return union
  }
  // 交集
  this.intersect = function (other) {
    let intersect = new SetDemo();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
        if (other.has(values[i])) {
            intersect.add(values[i]);
        }
    }
    return intersect;
  }
  // 差集
  this.difference = function (other) {
    let difference = new SetDemo();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!other.has(values[i])) {
        difference.add(values[i]);
      }
    }
    return difference;
  };
  // 子集
  this.subset = function(other) {
    if (this.size > other.size) {
      return false;
    } else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        console.log(values[i])
        console.log(other.values())
        if (!other.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  };
}
const set = new SetDemo([2,1,3])
// console.log(set.keys())
// console.log(set.values())
// console.log(set.size)
set.delete(1)
// console.log(set.values())
set.clear()
// console.log(set.size)

// 并集
let a = [1,2,3,4]
let b = new SetDemo([4,3,2])
let union = new SetDemo(a).union(b).values()
// console.log(union);

// 交集
let c = new SetDemo([4,3,2])
let intersect = new SetDemo([1,2,3]).intersect(c).values()
// console.log(intersect)

// 差集
let d = new SetDemo([4,3,2])
let difference = new SetDemo([1,2,3]).difference(d).values()
// console.log(difference)

// set 调用
var arrSet = [1,2,3,3,2,4]
// 数组去重
// [...new Set(arr)]
// Array.from(new Set(arr))

// 并集
let a1 = new Set([1,2,3])
let b1 = new Set([4,3,2])
var setUnion = new Set([...a1, ...b1])
// console.log(setUnion)
// 交集
let setIntersect = new Set([...a].filter(x=> b.has(x)))
// console.log(setIntersect);
// 差集
let setDifference = new Set([...a].filter(x => !b.has(x)))
// console.log(setDifference);

// map
// 可以快速读取的二维数组
let map1 = new Map()
console.log(map1);
// 属性：

// size：返回字典所包含的元素个数

// 操作方法：

// set(key, val): 向字典中添加新元素
// get(key):通过键值查找特定的数值并返回
// has(key):如果键存在字典中返回true,否则false
// delete(key): 通过键值从字典中移除对应的数据
// clear():将这个字典中的所有元素删除
// 遍历方法：

// keys():将字典中包含的所有键名以数组形式返回
// values():将字典中包含的所有数值以数组形式返回
// forEach()：遍历字典的所有成员

map1.set('k', [12,14])
map1.set('h', [152,154])
// console.log(map1.get('k'));
// console.log(map1.has('k'));
// console.log(map1.delete('k'));
// console.log(map1.keys());
// console.log(map1.values());
// for (var value of map1.values()) {
//   console.log(value);
// }
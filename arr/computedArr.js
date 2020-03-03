// 两数之和  leetCode题
// 给定数组 一个数组 num 一个目标值 target
// ，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

let num = [2, 7, 11, 15]
let target = 17

// 暴力破解 两次遍历
// let twoNum = function (arr, target) {
//   let len = arr.length
//   if (len <= 2) return -1
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }

//暴力破解  一次遍历
// let twoNum = function (arr, target) {
//   let len = arr.length
//   if (len <= 2) return -1
//   let temp = []
//   for (let i = 0; i < arr.length; i++) {
//     let targetNum = target - arr[i]
//     if (temp[targetNum] !== undefined) {
//       return [temp[targetNum], i]
//     }
//     temp[arr[i]] = i
//   }
// }

// 哈希
let twoNum = function (arr, target) {
  let len = arr.length
  if (len <= 2) return -1
  let map = new Map
  for (let i = 0; i < arr.length; i++) {
    let targetNum = target - arr[i]
    if (targetNum in map) return [map[targetNum], i]
    map[arr[i]] = i
  }
}

console.log(twoNum(num, target));
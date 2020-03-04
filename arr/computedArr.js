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

// console.log(twoNum(num, target));

// 三数之和  leetCode
// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

let nums = [-1, 0, 1, 2, -1, -4]
// 暴力破解
// let threeNum = function (nums) {
//   if (nums.length <= 3) return []
//   let res = []
//   for (let i = 0; i < nums.length - 2; i++) { // 每个人
//     for (let j = i + 1; j < nums.length - 1; j++) { // 带上一个人
//       for (let k = j + 1; k < nums.length; k++) { // 第三个人
//         if (nums[i] + nums[j] + nums[k] === 0) { // 看看能不能 = 0
//           res.push([nums[i], nums[j], nums[k]])
//         }
//       }
//     }
//   }
//   return res
// }

let threeNum = function (nums) {
  let len = nums.length
  if (len < 3) return []
  nums.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - i]) continue
    let l = i + 1
    let r = len - 1
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r]
      if (sum = 0) {
        res.push(nums[i], nums[l], nums[r])
        while (l < r && nums[l] == nums[l + 1]) ++l
        while (l < r && nums[r] == nums[r - 1]) r--
        l++
        r--
      } else if (sum < 0) l++
      else if (sum > 0) r--
    }
  }
  return res
}

console.log(threeNum(nums));
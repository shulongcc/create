// SKU是英语中StockKeeping Unit的缩写，直译过来就是存货单元

// 举个例子
// 女孩子去买衣服，找到喜欢的款式，喜欢的颜色，还得找到自己的尺码——款式+颜色+尺码就是这里说的SKU，是我们识别产品所必须的，也是商场进出存的最小单元。同样的款式、同样的颜色，中号跟小号是不同的存货单元，所以得由两个不同的SKU编码来识别。

let names = ["iphone X", "iphone XS"]
let colors = ["黑色", "白色"]
let storages = ["64g", "256g"]

// 组合

// [
//   ['iphone X', '黑色', '64g'],
//   ['iphone X', '黑色', '256g'],
//   ['iphone X', '白色', '64g'],
//   ['iphone X', '白色', '256g'],
//   ['iphone XS', '黑色', '64g'],
//   ['iphone XS', '黑色', '256g'],
//   ['iphone XS', '白色', '64g'],
//   ['iphone XS', '白色', '256g']
// ]

// 思路分解
// 以上文所举的例子来说，比如我们目前的属性数组就是：names、colors、storages，首先我们会处理 names 数组，很显然对于每个属性数组，都需要去遍历它，然后一个一个选择后再去和 下一个数组的每一项进行组合。
// 我们设计的递归函数接受两个参数：

// index 对应当前正在处理的下标，是 names 还是 colors 或是 storage。
// prev 上一次递归已经拼接成的结果，比如 ['iPhone X', '黑色']。

// 进入递归函数：


// 处理属性数组的下标0：假设我们在第一次循环中选择了 iPhone XS，那此时我们有一个未完成的结果状态，假设我们叫它 prev，此时 prev = ['iPhone XS']。


// 处理属性数组的下标1：那么就处理到 colors 数组的了，并且我们拥有 prev，在遍历 colors 的时候继续递归的去把 prev 拼接成 prev.concat(color)，也就是 ['iPhone XS', '黑色'] 这样继续把这个 prev 交给下一次递归。


// 处理属性数组的下标2：那么就处理到 storages 数组的了，并且我们拥有了 name + color 的 prev，在遍历 storages 的时候继续递归的去把 prev 拼接成 prev.concat(storage)，也就是 ['iPhone XS', '黑色', '64g']，并且此时我们发现处理的属性数组下标已经到达了末尾，那么就放入全局的结果变量 res 中，作为一个结果。


let combine = function (...chunks) {
  let res = []

  let helper = function (chunkIndex, prev) {
    let chunk = chunks[chunkIndex]
    let isLast = chunkIndex === chunks.length - 1
    for (let val of chunk) {
      let cur = prev.concat(val)
      if (isLast) {
        // 如果已经处理到数组的最后一项了 则把拼接的结果放入返回值中
        res.push(cur)
      } else {
        helper(chunkIndex + 1, cur)
      }
    }
  }

  // 从属性数组下标为 0 开始处理
  // 并且此时的 prev 是个空数组
  helper(0, [])

  return res
}

console.log(combine(names, colors, storages))

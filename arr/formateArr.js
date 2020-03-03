// 数组整理格式化
let list = [{
    id: 1,
    year: '2020',
    month: '01'
  },
  {
    id: 2,
    year: '2020',
    month: '02'
  },
  {
    id: 3,
    year: '2020',
    month: '03'
  },
  {
    id: 4,
    year: '2020',
    month: '04'
  },
  {
    id: 5,
    year: '2019',
    month: '12'
  },
  {
    id: 6,
    year: '2021',
    month: '01'
  },
]

// 按年分类数组
// 1.创建临时数组 tempArr ，结果数组 resultData 
// 2.如果 临时数组 tempArr 没有当前对象的年份，则向 临时数组 tempArr中存入，并且向  结果数组 resultData 中 存入需要的结果
// 3.如果 临时数组 tempArr 存在当前对象的年份，则遍历 结果数组 resultData 如果 结果数组 resultData 当前对象name 和  item.year 相同 则向结果数组 resultData.content 中 存入，跳出循环
// 4.输出 结果数组 resultData

function formate(array) {
  const tempArr = []
  const resultData = []
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (tempArr.indexOf(item.year) === -1) {
      resultData.push({
        name: item.year,
        content: [item]
      })
      tempArr.push(item.year)
    } else {
      for (let j = 0; j < resultData.length; j++) {
        const el = resultData[j];
        if (el.name === item.year) {
          el.content.push(item)
          break
        }
      }
    }
  }
  return resultData
}

// console.log(formate(list));

// let result = [
//   ({
//     name: '2020',
//     content: [
//       { id: 1, year: '2020', month: '01' },
//       { id: 2, year: '2020', month: '02' },
//       { id: 3, year: '2020', month: '03' },
//       { id: 4, year: '2020', month: '04' },
//     ],
//   },
//   {
//     name: '2019',
//     content: [{ id: 5, year: '2019', month: '12' }],
//   },
//   {
//     name: '2021',
//     content: [{ id: 6, year: '2021', month: '01' }],
//   }),
// ]
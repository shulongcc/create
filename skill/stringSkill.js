// 对比时间
const time1 = '2020-01-14 21:00:00'
const time2 = '2020-03-14 09:00:00'
const overTime = time1 > time2
// overTime => false

// 格式化金钱
const ThousandNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
const money = ThousandNum(202020220200305)
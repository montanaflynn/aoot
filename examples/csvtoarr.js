var fs = require('fs')
var aoot = require('aoot')

var data = fs.readFileSync('./data.csv')
var arr = aoot.arr(data, ",")

console.log(arr)
// [ { name: 'Montana', age: '27', location: 'San Francisco' },
//   { name: 'George', age: '22', location: 'San Francisco' },
//   { name: 'Chris', age: '25', location: 'Costa Mesa' } ]
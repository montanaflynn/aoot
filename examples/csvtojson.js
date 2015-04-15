var fs = require('fs')
var aoot = require('aoot')

var data = fs.readFileSync('./sample.csv')
var json = aoot.json(data, ",")

console.log(json)


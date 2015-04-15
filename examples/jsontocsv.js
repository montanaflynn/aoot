var aoot = require('aoot')

var data = require('sample.json')

console.log(aoot.csv(data))

// name,age,location_current,location_previous_0,location_previous_1,location_previous_2
// Montana,27,San Francisco,San Diego,Newport Beach,Mammoth Mountain
// Will,25,New Orleans,Orange County,Coos Bay,undefined
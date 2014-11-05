var aoot = require('./index.js')

var flat = [
    {
        "name": "Montana",
        "age": 27,
        "location": "San Francisco"
    },
    {
        "name": "George",
        "age": 22,
        "location": "San Francisco"
    },
    {
        "name": "Chris",
        "age": 25,
        "location": "Costa Mesa"
    }
]

console.log(aoot.csv(flat))
console.log(aoot.tsv(flat))
console.log(aoot.sv(flat, ";"))
console.log(aoot.xml(flat))


var nested = [
	{
		"name" : "Montana",
		"age" : 27,
		"location" : {
			"current" : "San Francisco",
			"previous" : ["San Diego", "Newport Beach", "Mammoth Mountain"]
		}
	},
	{
		"name" : "Will",
		"age" : 25,
		"location" : {
			"current" : "New Orleans",
			"previous" : ["Orange County", "Coos Bay"]
		}
	}
]

console.log(aoot.csv(nested))
console.log(aoot.tsv(nested))
console.log(aoot.sv(nested, ";"))
console.log(aoot.xml(nested))

var csv = aoot.csv(flat)
var arr = aoot.array(csv, ",")
var json = aoot.json(csv, ",")
console.log(arr)
console.log(json)

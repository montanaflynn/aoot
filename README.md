# aoot

The name stands for "array of objects to" and what it does is convert JSON or a plain ol' javascript array of objects into various data formats. 

### Install

`npm install aoot`

### Usage

Assume you have this data in a file called data.json

	[
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

Now we can use aoot to convert that JSON to a seperated value format like csv or tsv and also xml.

```js
var aoot = require('aoot')
var data = require('./data.json')

var CSV = aoot.csv(data)
var TSV = aoot.tsv(data)
var XML = aoot.xml(data)

console.log(CSV)

// name,age,location
// Montana,27,San Francisco
// George,22,San Francisco
// Chris,25,Costa Mesa

console.log(TSV)

// name	age	location
// Montana	27	San Francisco
// George	22	San Francisco
// Chris	25	Costa Mesa

console.log(XML)

// <?xml version="1.0"?>
// <ROWSET>
//   <ROW>
//     <name>Montana</name>
//     <age>27</age>
//     <location>San Francisco</location>
//   </ROW>
//   <ROW>
//     <name>George</name>
//     <age>22</age>
//     <location>San Francisco</location>
//   </ROW>
//   <ROW>
//     <name>Chris</name>
//     <age>25</age>
//     <location>Costa Mesa</location>
//   </ROW>
// </ROWSET>
```

### Notes

When dealing with nested objects or arrays the output follows these rules:

- For a nested object an underscore seperates the parents from children.
- For arrays an underscore seperates the index of the item from the property name.
- Any data that is not found will be marked as undefined.

Here's an example:

```js
var data = [
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

console.log(aoot.csv(data))

// name,age,location_current,location_previous_0,location_previous_1,location_previous_2
// Montana,27,San Francisco,San Diego,Newport Beach,Mammoth Mountain
// Will,25,New Orleans,Orange County,Coos Bay,undefined
```

### Todos

- Add various options to XML output
- Create tests

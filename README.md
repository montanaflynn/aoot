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

- For a nested object the column is returned as `parent_child` with an underscore acting as the seperator.
- For arrays the column is returned as `array_0 and array_1` with an underscore seperating the index.

### Todos

- Add various options to XML output
- Create tests

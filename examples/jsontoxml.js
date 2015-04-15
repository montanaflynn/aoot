var aoot = require('aoot')
var data = require('./sample.json')

var XML = aoot.xml(data)
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
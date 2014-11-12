module.exports = toArray
function toArray(data, seperator, json) {

  // Check if already an array
  if (data.constructor == Array)
    return data

  // If we have a seperator use parseSV otherwise assume it's XML
  var array = seperator ? parseSV(data, ",") : parseXML(data)

  // If we have JSON arg then lets jsonify it with pretty-print
  return (json) ? JSON.stringify(array, null, 4) : array

}

// PARSE SV DATA INTO JSON
// @todo support nested objects and arrays like this 
// name,age,location_current,location_previous_0,location_previous_1,location_previous_2
// Montana,27,San Francisco,San Diego,Newport Beach,Mammoth Mountain
// Will,25,New Orleans,Orange County,Coos Bay,undefined

function parseSV(data, seperator) {
  var arr = []

  // Split into lines and properties
  var lines = data.toString().split("\n")
  var properties = lines[0].split(",")

  // Loop over lines skipping the first
  for(var i = 1; i < lines.length; i++) {

    // Store the values in an array
    var values = lines[i].split(",")

    // Skip empty lines
    if (!lines[i].length) continue

    // Create a temp object
    var obj = {}

    // Loop properties
    for (var n = 0; n < properties.length; n++) {

      // Store values in their property
      obj[properties[n]] = values[n]

    }

    // Push the temp object into the array
    arr.push(obj)

  }

  return arr
}

// PARSE XML DATA INTO JSON
// @todo figure this out
// <?xml version="1.0"?>
// <ROWSET>
//   <ROW>
//     <name>Montana</name>
//     <age>27</age>
//     <location_current>San Francisco</location_current>
//     <location_previous_0>San Diego</location_previous_0>
//     <location_previous_1>Newport Beach</location_previous_1>
//     <location_previous_2>Mammoth Mountain</location_previous_2>
//   </ROW>
// </ROWSET>
function parseXML(data) {

  throw new Error('This has not been implemented yet!')

  // Remove xml 
  // Keep Rows
  // Loop Rows
  // Loop Nodes in Rows
  // Get tag name
  // Destroy opening tag
  // Destroy ending tag
  // Have tag content

}
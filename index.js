// Export the aoot public API
module.exports = {
  sv : function(data, seperator) {
    return toSV(data, seperator)
  },
  csv : function(data) {
    return toSV(data, ",")
  },
  tsv : function(data) {
    return toSV(data, "\t")
  },
  xml : function(data) {
    return toXML(data)
  },
  array : function(data, seperator) {
    return toArray(data, seperator)
  },
  json : function(data, seperator) {
    return toArray(data, seperator, true)
  }
}

// Helper function for csv, tsv and similar formats
function toSV(data, seperator) {

  // Get the properties in provided data
  var properties = getProperties(data)

  // Split the properties by provided seperator
  var output = properties.join(seperator) + "\n"

  // Loop over the data's objects
  for (var i = 0; i < data.length; i++) {

    // Flatten the object
    var d = flatten(data[i])

    // Loop over the properties we found
    for (var n = 0; n < properties.length; n++) {

      // Save the value of the property
      var value = d[properties[n]]

      // Add the properties to the output
      output += (n === properties.length -1) ? value : value + seperator
    }

    // Finish the output with a newline
    output += "\n"
  }

  // Return the new data format 
  return output

}


// Convert to XML format
function toXML(data) {

  // Get the properties
  var properties = getProperties(data)

  // Start with static XML stuff
  var output = '<?xml version="1.0"?>\n'
  output += '<ROWSET>\n'

  // Loop over each object in the data
  for (var i = 0; i < data.length; i++) {

    // Flatten the object
    var d = flatten(data[i])

    // Add the row for this object
    output += '\t<ROW>\n'

    // Loop over the properties we found
    for (var n = 0; n < properties.length; n++) {

      // Add a new node for each property with the value inside
      var prop = properties[n]
      var value = d[prop]
      output += '\t\t<'+prop+'>'+value+'</'+prop+'>\n'
    }

    // Close out the row
    output += '\t</ROW>\n'
  }

  // Close out the XML
  output += '</ROWSET>\n'

  // Return the new XML data
  return output

}

// Get all the properties in the data's objects
function getProperties(data) {

  var properties = []

  // Loop over each object in the data
  for (var i = 0; i < data.length; i++) {

    // Loop over each property in the flattened object
    for (property in flatten(data[i])) {

      // Only add to properties if it's new
      if (properties.indexOf(property) === -1){
        properties.push(property)
      }

    }

  }

  // Throw an error since there are no properties
  if (!properties.length) throw new Error('Data has no properties!');

  // Return the properties we found
  return properties

}

// Flatten object
function flatten(object) {

  // The new flat object to return
  var flattened = {}

  // Walk over each property
  walk(object, function(path, property) {

    // return new properties to the flattened object
    flattened[path.join('_')] = property

  })

  // Return the new flat object
  return flattened

  // Walk over the object
  function walk(obj, give, path) {

    var property
    path = path || []

    // Loop over each property in the object
    for (key in obj) {

      // Save the property
      property = obj[key]

      // If property is an object keep walking
      if (typeof property == 'object') {
        walk(property, give, path.concat(key))

      // Otherwise give the property back
      } else {
        give(path.concat(key), property)
      }

    }

  }
  
}

// Let's go the other way around and parse CSV, TSV, SV, XML into JSON arrays 
function toArray(data, seperator, json) {

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

var utils = require(__dirname + '/utils.js')

module.exports = toXML

// Convert to XML format
function toXML(data) {

  // Get the properties
  var properties = utils.getProperties(data)

  // Start with static XML stuff
  var output = '<?xml version="1.0"?>\n'
  output += '<ROWSET>\n'

  // Loop over each object in the data
  for (var i = 0; i < data.length; i++) {

    // Flatten the object
    var d = utils.flatten(data[i])

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

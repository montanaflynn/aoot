var utils = require(__dirname + '/utils.js')

// Convert to SV format
module.exports = toSV
// Helper function for csv, tsv and similar formats
function toSV(data, seperator) {

  // Get the properties in provided data
  var properties = utils.getProperties(data)

  // Split the properties by provided seperator
  var output = properties.join(seperator) + "\n"

  // Loop over the data's objects
  for (var i = 0; i < data.length; i++) {

    // Flatten the object
    var d = utils.flatten(data[i])

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
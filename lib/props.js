var utils = require(__dirname + '/utils.js')

// Get all the properties in the data's objects
module.exports = function(data) {

  var properties = []

  // Loop over each object in the data
  for (var i = 0; i < data.length; i++) {

    // Loop over each property in a flattened object
    for (property in utils.flatten(data[i])) {

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
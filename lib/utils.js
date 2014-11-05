module.exports = {
  flatten : flatten,
  getProperties : getProperties
}

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

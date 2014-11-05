// Include source 
var toSV = require(__dirname + '/src/sv.js')
var toXML = require(__dirname + '/src/xml.js')
var toArray = require(__dirname + '/src/array.js')

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

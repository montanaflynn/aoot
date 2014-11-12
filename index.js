// Include source 
var toSV = require(__dirname + '/lib/sv.js')
var toXML = require(__dirname + '/lib/xml.js')
var toYAML = require(__dirname + '/lib/yaml.js')
var toArray = require(__dirname + '/lib/array.js')

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
  },
  yaml : function(data) {
    return toYAML(data)
  }
}

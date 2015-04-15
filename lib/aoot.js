// Include source 
var toSV = require('./sv.js')
var toXML = require('./xml.js')
var toYAML = require('./yaml.js')
var toArray = require('./array.js')

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

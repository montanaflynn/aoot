module.exports = {
  sv : function(data, seperator) {
    return toSV(data, seperator)
  },
  csv : function(data) {
    return toSV(data,",")
  },
  tsv : function(data) {
    return toSV(data,"\t")
  },
  xml : function(data) {
    return toXML(data)
  }
}

function toSV(data, seperator) {
  var props = []

  for (property in data[0]) {
    props.push(property)
  }

  var output = props.join(seperator) + "\n"

  for (var i = 0; i < data.length; i++) {

    var d = data[i]

    for (var n = 0; n < props.length; n++) {

      var p = props[n]


      output += (n === props.length -1) ? d[p] : d[p] + seperator

    }

    output += "\n"

  }

  return output
}


function toXML(data) {
  var props = []

  for (property in data[0]) {
    props.push(property)
  }

  var output = '<?xml version="1.0"?>\n'
  output += '<ROWSET>\n'

  for (var i = 0; i < data.length; i++) {

    var d = data[i]
    output += '\t<ROW>\n'

    for (var n = 0; n < props.length; n++) {
      var p = props[n]
      output += '\t\t<'+p+'>'+d[p]+'</'+p+'>\n'
    }

    output += '\t</ROW>\n'

  }

  output += '</ROWSET>\n'

  return output

}

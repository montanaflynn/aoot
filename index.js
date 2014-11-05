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

  var props = getProps(data)

  var output = props.join(seperator) + "\n"

  for (var i = 0; i < data.length; i++) {

    var d = flatten(data[i])

    for (var n = 0; n < props.length; n++) {

      var p = props[n]

      output += (n === props.length -1) ? d[p] : d[p] + seperator

    }

    output += "\n"

  }

  return output
}


function toXML(data) {

  var props = getProps(data)

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

function getProps(data) {
  var props = []

  for (var i = 0; i < data.length; i++) {
    for (property in flatten(data[i])) {
      if (props.indexOf(property) === -1){
        props.push(property)
      }
    }
  }

  return props
}

function flatten(json) {
  var flattened = {}

  walk(json, function(path, item) {
    flattened[path.join('_')] = item
  })

  return flattened

  function walk(obj, walker, path) {
    var item
    path = path || []
    for (key in obj) {
      item = obj[key]
      if (typeof item == 'object') {
        walk(item, walker, path.concat(key))
      } else {
        walker(path.concat(key), item)
      }
    }
  }
}
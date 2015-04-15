var mocha = require('mocha')
var assert = require('assert')

var aoot = require('../lib/aoot')
var data = [
    {
        "name" : "Montana",
        "age" : 27,
        "location" : {
            "current" : "San Francisco",
            "previous" : ["San Diego", "Newport Beach", "Mammoth Mountain"]
        }
    },
    {
        "name" : "Will",
        "age" : 25,
        "location" : {
            "current" : "New Orleans",
            "previous" : ["Orange County", "Coos Bay"]
        }
    }
]

describe('tests', function(){
  it('should be coming soon', function(){
    assert.equal(true, true)
  })
})

# aoot [![Test Status](https://img.shields.io/wercker/ci/551bc8323993a61109001091.svg)](https://app.wercker.com/#applications/551bc8323993a61109001091) ![License](https://img.shields.io/npm/l/aoot.svg)

Converts an array of objects to and from data formats JSON, CSV, TSV, XML and YAML.

### Install

`npm install aoot --save`

### Usage

```js
var aoot = require('aoot')

// JSON to CSV
var csv = aoot.csv(json)

// JSON to TSV
var tsv = aoot.tsv(json)

// JSON to user defined seperated values
var pipeSeperated = aoot.sv(json, "|")

// JSON to XML
var xml = aoot.xml(json)

// JSON to YAML
var yaml = aoot.yaml(json)

// CSV to JSON
var json = aoot.json(csv, ",")

// TSV to JSON
var json = aoot.json(tsv, "\t")

// User defined seperated values to JSON
var json = aoot.json(pipeSeperated, "|")

// XML to JSON
// Coming soon?
```

#### Nested objects and arrays

When dealing with nested objects or arrays the output follows these rules:

- For a nested object an underscore seperates the parents from children.
- For arrays an underscore seperates the index of the item from the property name.
- Any data that is not found will be marked as undefined.

```js
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

console.log(aoot.csv(data))

// name,age,location_current,location_previous_0,location_previous_1,location_previous_2
// Montana,27,San Francisco,San Diego,Newport Beach,Mammoth Mountain
// Will,25,New Orleans,Orange County,Coos Bay,undefined
```

### Todos

- XML to JSON 
- Write unit tests
- Add CLI tool

### MIT license

Copyright (c) 2015, Montana Flynn (http://anonfunction.com/)
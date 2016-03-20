var module = require('./module.js')

var dir = process.argv[2]
var ext = process.argv[3]

module(dir, ext);
var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var ext = "." + process.argv[3]

fs.readdir(dir, function doneReading(err, list){
	for(var item in list){
		if(path.extname(list[item]) === ext){
			console.log(list[item])
		}
	}
})
var fs = require('fs')
var path = require('path')


module.exports = function printList(dir, ext){

	ext = "." + ext;

	fs.readdir(dir, function doneReading(err, list){
		
		list.forEach(function(val){
			if(path.extname(val) === ext){
				console.log(val);
			}
		})
	})
}


var fs = require("fs");


 module.exports = function(){

 			var fs = require("fs");
 			
 			
 			var content = fs.readFileSync("./public/test.json");
 			
 			//console.log("Output Content : \n"+ content);
 			

 			return content;

 }
var Github = require('github-api')
var uuid = require('uuid4');


module.exports = function(name){

var github = new Github({
	username: "Github User",
	password: "Github pass",
	auth: "Github Auth"
})

var repo = github.getRepo("Your Github username", "Your Github repo");
var id = uuid(); 
repo.write('master', name , id , id , function(err) {
	console.log(err);
})

}
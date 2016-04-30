var Github = require('github-api')
var uuid = require('uuid4');


module.exports = function(name){

var github = new Github({
	username: "Github User", // Edit this with you github username
	password: "Github pass", // Edit this with your Github pass
	auth: "Github Auth" // Edit this with Github API token from https://github.com/settings/tokens/new
})

var repo = github.getRepo("Your Github username", "Your Github repo"); // Edit this with you Username and desired repo
var id = uuid(); 
repo.write('master', name , id , id , function(err) {
	console.log(err);
})

}

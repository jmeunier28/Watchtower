

var Github = require('github-api')
var uuid = require('uuid4');


module.exports = function(name){

var github = new Github({
	username: "Github User",  // Edit this with your Github username
	password: "Github pass",  // Edit this with you Github pass.
	auth: "Github Auth"  // Edit this with you API Auth token from https://github.com/settings/tokens/new
})

var repo = github.getRepo("Github Username", "Your Github repo"); // Edit this with your Github username and desire repo name
var run=function(i){
	if(i <= name.no){
		path = name.path + '/' + name.doc + '-' + i;
		var id = uuid(); 
		console.log('Id Assigned : ' + id);
		repo.write('master', path , id , id , function(err) {
			console.log(err);
			console.log('created : ' + path);
			run(i+1);
		});
	  }
	}	
run(1);
}

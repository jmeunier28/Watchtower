var Github = require('github-api')
var uuid = require('uuid4');


module.exports = function(name){

var github = new Github({
	username: "Github User",
	password: "Github pass",
	auth: "Github Auth"
})

var repo = github.getRepo("Github Username", "Your Github repo");
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
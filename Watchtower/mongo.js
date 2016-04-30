var Github = require('github-api')
var uuid = require('uuid4');



var github = new Github({
	username: "sngpranay",
	password: "economics110921278",
	auth: "feeea35e7619975d231bf555b6652daf65e797db"
})

var repo = github.getRepo("sngpranay", "Test");
var id = uuid(); 
var search = github.getSearch('09b5e905-93c1-44d9-9d4d-7a7b16c22951');
search.repositories(function (err, repositories) {console.log(err)});

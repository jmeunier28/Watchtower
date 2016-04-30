/*
    app.js
    Project : Watchtower 
    Author  : Pranay Singh
  
*/

/*------------------------------------------------------*/
// Dependencies
var path = require('path')
var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var compressor = require('node-minify');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var filendir = require('filendir')
var fs = require('fs');
var jsonfile = require('jsonfile')
var util = require('util')


/*---------------------------------------------------*/
// Database configurations


var configDB = require('./config/database.js');

mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

var Create = require('./config/create'); // Require create configuration


/*---------------------------------------------------*/
// User configurations 


var Load = require('./config/load'); // json

var Repo = require('./config/repo'); // Require repo configuration 

var git_add = require('./config/git_add'); // Require repo configuration 

/*---------------------------------------------------*/
// Authentication configurations


app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
//app.use(bodyParser()); // get information from html forms
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./app/routes.js')(app, passport, Create, io, Load, Repo); // load our routes and pass in our app and fully configured passport


/*------------------------------------------------------*/
// Client configuration

// Allows for ejs to be our designated view rendering engine
app.set('view engine', 'ejs');

// Compresses javascripts into a single javascript
// new compressor.minify({
//   // type: 'uglifyjs',
//   type: 'no-compress',
//   publicFolder: 'assets/javascripts/',
//   fileIn: [ 'buttons.js'],
//   fileOut: 'public/javascript.js',
//   callback: function(err, min) {
//     if (err != null) { console.log(err); }
//     else { console.log("Server: Javascript files compressed and uglified!"); }
//   }
// });

// Compiles a stylesheet from scss
app.use(sassMiddleware({
  src: __dirname + '/assets/stylesheets',
  dest: __dirname + '/public',
  debug: true
}));

// Binds static assets (CSS, JavaScript,) to application
app.use('/', express.static(__dirname + '/assets/images'));
app.use('/', express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/views'));
app.use('/', express.static(__dirname + '/app'));
app.use('/', express.static(__dirname + '/DATA'));

//app.listen(3000);

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


/*------------------------------------------------------*/
// Server-Client Interface

io.on('connection', function(socket) {
console.log("client connected");


socket.on('browse', function(email){

    console.log('socket' + global.name.user.local.email);
    var Project = require('./app/models/project');
    Project.findOne({ 'id' : global.name.user.local.email  }, function(err, callback) {
    if (err) return "Error searching person";
    if(callback) {
      console.log(callback);
    socket.emit('callback_project', callback.allwork);
    }
    });
  });



socket.on('load', function(val){

global.name.user.project.name = val;

    var Project = require('./app/models/project');
    Project.findOne({ 'id' : global.name.user.local.email  }, function(err, callback) {
    if (err) return "Error searching person";
    if(callback) {
      //console.log(callback.allwork);
      for(var i = 0; i < callback.allwork.length; i++) {
           if(callback.allwork[i].name == val){


              socket.emit('load-back', callback.allwork[i].head);
            }
          }
        }
        console.log('3423423432 ' + global.name.user.project.head)
 
      });

  });


socket.on('repo', function(info){

//Repo(info.code);

var Project = require('./app/models/project');
Project.findOne({ 'id' : global.name.user.local.email  }, function(err, callback) {
if (err) return "Error searching person";
    if(callback) {
      //console.log(callback.allwork);
      for(var i = 0; i < callback.allwork.length; i++) {
           if(callback.allwork[i].name == global.name.user.project.name){

            

            var prev_head = callback.allwork[i].head;

            var new_info = 'D-' + info.code 

            var new_head = prev_head + '/' + new_info ; 

            console.log(new_head);

            var repo_head = prev_head + '/' + new_info + '/' + info.code;

            console.log(repo_head); 

            Repo(repo_head);
            
            callback.allwork[i].head = new_head ;


            callback.save(function (err) {
    
                if(!err) console.log(err);
              
            });

            socket.emit('repo-back', new_head);
            }
          }
        }
  
 
      });

 
});


socket.on('add', function(val){


console.log('ass');
git_add(val);

  });




});

// app/routes.js
module.exports = function(app, passport,Create, io, Load, Repo) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('layouts/index.ejs'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('partials/login.ejs', { message: req.flash('loginMessage') }); 
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);
     app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {
 // render the page and pass in any flash data if it exists
        res.render('partials/signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);

     app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {


var User =  {   user : {
                _id : req.body.id,
                local :{
                    email : req.user.local.email,
                    password : req.user.local.password
                },
                project : {
                    name : null,

                    head : null
                } 
            }
        }

global.name = User
console.log(global.name)
console.log(req.user)
    //console.log('USER ' + global.name.local.email);

        res.render('partials/profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    
    // =====================================
    // Tree ==============================
    // =====================================

     app.post('/repo', function(req, res) {
        console.log(req.body.repo)
        Repo(req.body.repo)
    });

    // =====================================
    // Create ==============================
    // =====================================

     app.post('/create', function(req, res) {
        console.log(req.body.name);
        console.log(req.body.protocol);
        console.log(req.body.id);
        console.log(req.body.email);

//var p = Load();


global.name =  {   user : {
                _id : req.body.id,
                local :{
                    email : req.body.email,
                    password : req.body.pass
                },
                project : {
                    name : req.body.name,

                    head : req.body.name
                } 
            }
        }

// global.name = User.user;
console.log('USER' + global.name.user.local.email);

Create(global.name);
//console.log(Create(User));
m = "hallo";

        res.render('partials/profile.ejs', {
            user : {
                _id : req.body.id,
                local :{
                    email : req.body.email,
                    password : req.body.pass
                },
                project : {
                    name : req.body.name,
                    head : null,

                } 
            },
        message : global.mess
                  // get the user out of session and pass to template
        });

  //res.redirect('back')
        //var color = req.body.color;
    
});



};
    


    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {


    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
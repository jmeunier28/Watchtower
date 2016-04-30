// app/models/project.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our project model
var projectSchema = mongoose.Schema({

    
            id        : String,
            allwork :[ 
                        {

                                    
                                    name         : String,
                                    head         : String
                        }
                    ]
     

  
});



// create the model for users and expose it to our app
module.exports = mongoose.model('Project', projectSchema);


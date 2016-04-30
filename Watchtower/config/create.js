var Project = require('../app/models/project');


module.exports = function(a){

var m;

var t = 0;

 Project.findOne({ 'id' :  a.user.local.email }, function(err, callback) {
            // if there are any errors, return the error
            if (err) { global.mess = "Error searching person";
            			return;
            		}
            // check to see if theres already a user with that email
            	     //var newa = callback.work.name; 
            	     //console.log(callback);
       
           //  else if(callback.allwork.length == 0){  //User submits first project

           //  	callback.allwork.push({
           //  		protocol : a.user.project.protocol,
           //  		name : a.user.project.name,
           //  		json : "none"
           //  	})
            	
           //  	callback.save(function (err) {
        			// if(!err)  { global.mess = "First Project saved !";
        			// 			return;
        			// 			}
        			// });
           //  	return;

           //  }
            
           if(1){

            	if(compare(callback,a)) {    //If not first project
            	 		global.mess = "A Project of the the same name already exists in your collection";
        				return;
					}

            	else{	


            		callback.allwork.push({
            		name : a.user.project.name,
            		head : a.user.project.head
            	})

            		callback.save(function (err) {
        			if(!err) {
        				global.mess = "Project save succesfully"	;	
        				return;
        				}

    				});
					

            }

         }
        

            //callback(m);


        });

function compare(callback, a){	

					for (var i = 0; i < callback.allwork.length ; i++) {  //Check to see if project exist
            		if (callback.allwork[i].name === a.user.project.name){
            			// global.mess =  "A Project of the the same name already exists in your collection" ;
            			var t = 1 ;
            		}

        		}
        		return t;
			}


}

// function callback(m){
// 	console.log('dfdsfsffs' + mess);
// 	console.log("sdfjdslfjglfdjglfsajglfjgldfsjgd");
// 	return mess;
// }


// find(a,callback);
// function docall(find,callback){
// 	find(a);
// 	callback();
// 	return
// } 

// docall(find,callback);

// console.log('m dsafds is' + m );

           

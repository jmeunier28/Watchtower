


$(document).ready(function() {

var socket = io.connect();

// ------------- BROWSE ----------------------
$(document.getElementById('list')).hide();


$("#browse").click(function() {

      socket.emit('browse', 'email');
    $('#load-overlay-sidebar').addClass('loading');
  });



socket.on('callback_project', function(callback){


        var select = document.getElementById("list"); 

          select.innerHTML = "";
            // Populate list with options:
          for(var i = 0; i < callback.length; i++) {
          var opt = callback[i].name;
          select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
      }

      $(document.getElementById('list')).show();


});

/////////////////-------------------------------

$("#create").click(function() {

  socket.emit('create', $( "#name" ).val());
  });


// ------------- REMOVE ---------------------


$("#remove").click(function() {





});






// ------------- LOAD ----------------------

$("#load").click(function() {

socket.emit('load', $('#list').val());

socket.on('load-back',function(callback){
    $("#text").text(callback);

});

   
});

$("#repo").click(function() {

if($('#code').val()){

var info = {code : $('#code').val(),
            no: null,
          }

socket.emit("repo", info);
}
socket.on('repo-back', function(x){
  console.log(x);
  $("#text").text(x);
})


   
});

$("#add").click(function() {

if($('#path').val() && $('#doc').val() && $('#no').val()){ 

var add_info = {

                path : $('#path').val(),
                doc: $('#doc').val(),
                no: $('#no').val()
                
              }

console.log('add');
socket.emit("add", add_info);

}

else {alert("Please fill all the values")} ;


socket.on('repo-back', function(x){
      console.log(x);
      $("#text").text(x);
     })


   
});

socket.on('callback_allwork', function(callback){



      //       // Populate list with options:
      //     for(var i = 0; i < callback.length; i++) {
      //      if(callback[i].name == "zingzong"){
      //  var base64data = new Buffer(callback[i].json, 'binary').toString('base64');

      //         console.log(base64data);

      //      }
      // }



});

// ------------- CREATE ----------------------




// socket.on('callback', function(callback){

// console.log(callback);

// });

  // $('#set-button').click(function() {
  //   var t = $('#select-timer').val();
  //   var s = $('#select-sample').val();
  //   socket.emit('configure motes', t + ":" + s);
  //   $('#load-overlay-main').addClass('loading');
  // });
  // // When start button is click, it should configure motes
  // // and start schedule.
  // $('#start-button').click(function() {
  //   var t = timer_value.getValue();
  //   var s = sample_value.getValue();
  //   socket.emit('start thermostat', t + ":" + s);
  //   $('#load-overlay-main').addClass('loading');
  // });

  // // Stop schedule
  // $('#stop-button').click(function() {
  //   socket.emit('stop thermostat');
  //   $('#load-overlay-main').addClass('loading');
  // });

  // // Send command to retrieve command with specified time parameters
  // $('#get-history').click(function() {
  //   var range = {
  //     start: start_time.getValue(),
  //     end: end_time.getValue()
  //   }
  //   socket.emit('get history chart', range);
  //   $('#load-overlay-main').addClass('loading');
  // });

  // Sidebar Button Visuals
  $('#menu-toggle-button').hover(
    function() {
      $('#menu-toggle').find(".sidebar-icon-bar").css('background-color', '#4183d7');
      $("#menu-toggle-button").css({
        border: '1px solid #4183d7'
      });
    }, function() {
      if (!$('#wrapper').hasClass('sidebar-toggled')) {
        $('#menu-toggle').find(".sidebar-icon-bar").css('background-color', '');
        $("#menu-toggle-button").css({
          border: '',
          background: ''
        });
      }
    }
  );

  // Toggle Sidebar
  $('#menu-toggle-button').click(function(e) {
    e.preventDefault();
    $('#wrapper').toggleClass("sidebar-toggled");
   // icon_bar_state();
  });

});





//----------------



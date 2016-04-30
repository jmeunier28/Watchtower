$(document).ready(function() {

  // // When scan button is clicked, tell server to broadcast "scan".
  // $("#scan-button").click(function() {
  //   socket.emit('start scan');
  //   $('#load-overlay-sidebar').addClass('loading');
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
    icon_bar_state();
  });

});

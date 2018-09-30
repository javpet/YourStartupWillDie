$(document).ready(function() {
  var $form = $('form');

  $('form input[type="submit"]').on('click', function(event) {
    event.preventDefault();
    register($form);
  })
})

function register($form) {
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache: false,
    dataType: 'json',
    contentType: "application/json; charset=utf-8",
    error: function(err) {
      alert("Could not connect to the registration server. Please try again later.");
    },
    success: function(data) {
      if (data.result != "success") {
        // Something went wrong, do something to notify the user. maybe alert(data.msg);
        console.log("Something went wrong")
      } else {
        // It worked, carry on...
        console.log("It was working!")
      }
    }
  });
}
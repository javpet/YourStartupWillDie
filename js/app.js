$(document).ready(function() {
  var form = $('form');
  // var email = $(`form input[type="email"]`)
  //
  // $(email).on("input", function() {
  //   if (email.validity.typeMismatch) {
  //     email.setCustomValidity("I expect an e-mail, darling!");
  //   } else {
  //     email.setCustomValidity("");
  //   }
  // })

  $('form input[type="submit"]').on('click', function(event) {
    event.preventDefault();
    register(form);
  })
})

function register(form) {
  $.ajax({
    type: form.attr('method'),
    url: form.attr('action'),
    type: 'get',
    data: form.serialize(),
    cache: false,
    dataType: 'jsonp',
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
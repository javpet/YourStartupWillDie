$(document).ready(function() {
  const form = $('form');
  const signUpErrorSpan = $("span.sign_up__error");


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
        console.log(data)
        $('span.sign_up__error').hide().fadeIn().text(data.msg)
      } else {
        // It worked, carry on...
        console.log("It was working!")
        form.hide()
        $('.sign_up__success_data').text(data.msg)
        $('.sign_up__success').hide().removeClass("display_none").fadeIn()

        console.log(data)
      }
    }
  });
}
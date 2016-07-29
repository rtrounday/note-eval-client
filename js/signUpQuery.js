$(document).ready(function(){
    $('#signUp').click(function(){
      $("#firstnameLabel").show();
      $("#lastnameLabel").show();
      $("#confirmPass").show();
      $("#loginHeader").text("Sign Up");
    });
    $('#login').click(function(){
      $("#firstnameLabel").hide();
      $("#lastnameLabel").hide();
      $("#confirmPass").hide();
      $("#loginHeader").text("Login");
    })
});

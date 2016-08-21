$(document).ready(function(){
    $('#signUp').click(function(){
      $("#alert").show();
      $("#firstnameLabel").show();
      $("#lastnameLabel").show();
      $("#confirmPass").show();
      $("#loginHeader").text("Sign Up");
    });
    $('#login').click(function(){
      $("#alert").show();
      $("#firstnameLabel").hide();
      $("#lastnameLabel").hide();
      $("#confirmPass").hide();
      $("#loginHeader").text("Login");
    })
});

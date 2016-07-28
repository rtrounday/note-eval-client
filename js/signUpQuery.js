$(document).ready(function(){
    $('#signUp').click(function(){
      $("#firstnameLabel").show();
      $("#firstnameLabel").append('<input type="text" class="form-control" placeholder="First Name"/>');
      $("#lastnameLabel").show();
      $("#lastnameLabel").append('<input type="text" class="form-control" placeholder="Last Name"/>');
      $("#confirmPass").show();
      $("#confirmPass").append('<input type="password" class="form-control" placeholder="Confirm Password"/>');
      $("#signUp").hide();
      $("#login").hide();
      $("#loginHeader").text("Sign Up");
      $("#confirmSignUp").show();
      $("#confirmSignUp").append('<button type="button" onclick="signUpWithFirebase(this.form)"id="signUp" class="btn btn-info">Create Account</button>')
    });
});

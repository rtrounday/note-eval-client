$(document).ready(function(){
    $("#uploader").click(function(){
      $(hiddenUpload).click();
    });
    $('#signUp').click(function(){
      $("#firstnameLabel").show();
      $("#firstnameLabel").append('<input type="text" class="form-control" placeholder="First Name"/>');
      $("#lastnameLabel").show();
      $("#lastnameLabel").append('<input type="text" class="form-control" placeholder="Last Name"/>');
      $("#confirmPass").show();
      $("#confirmPass").append('<input type="text" class="form-control" placeholder="Confirm Password"/>');
      $("#signUp").hide();
      $("#loginHeader").text("Sign Up");
    });
});

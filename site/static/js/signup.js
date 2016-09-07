function createUser(first_name, last_name, email, password, form){
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(
    function(result){
      var userId = result.uid;
      firebase.database().ref('users/' + userId).set(
        {username: first_name, lastName: last_name, email: email}
      );
      signInWithFirebase(form);
    },
    function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      $("#alert").show();
      $("#alert").removeClass();
      $("#alert").addClass("alert alert-danger");
      $("#alertMessage").replaceWith("<p id='alertMessage'>"+ errorMessage + "</p>");
    }
  );
}
function login(email, password){
  firebase.auth().signInWithEmailAndPassword(email, password).then(
    function(result) {
      var username = email;
      document.location.href="authenticated.html";
    },
    function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      $("#alert").show();
      $("#alert").removeClass();
      $("#alert").addClass("alert alert-danger");
      $("#alertMessage").replaceWith("<p id='alertMessage'>"+ errorMessage + "</p>");
    });
  }
  function signUpWithFirebase(form)
  {
    var email = form.user.value;
    var password = form.pass.value;
    var confirmPass = form.confirmPass.value;
    var first_name = form.firstname.value;
    var last_name = form.lastname.value;
    // Validating the information on the form before submitting
    var success = validateForm(email, password, first_name, last_name,  confirmPass);
    if (success){
      createUser(first_name, last_name, email, password, form);
    }
  }
  function signInWithFirebase(form)
  {
    var email = form.user.value;
    var password = form.pass.value;
    var success = validateForm(email, password);
    if (success){
      login(email, password);
    }

  }
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

function signUpWithFirebase(form)
{
  var email = form.user.value;
  var password = form.pass.value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(
    function(result){
      signInWithFirebase(form);
    },
    function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    $(document).ready(function()
    {
      $("#errorMessage").text(errorMessage).css({"color": "red", "text-align": "center"})
    }
  );
});
}
function signInWithFirebase(form)
{
  var email = form.user.value;
  var password = form.pass.value;
  firebase.auth().signInWithEmailAndPassword(email, password).then(
    function(result) {
      var username = email;
      document.location.href="authenticated.html";
    },
    function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      $(document).ready(function()
      {
        $("#errorMessage").text(errorMessage).css({"color": "red", "text-align": "center"})
      });
    });
  }

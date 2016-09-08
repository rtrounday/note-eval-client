function signOut(){
firebase.auth().signOut().then(function() {
  // Sign-out successful.
  alert("Logout successful");
  document.location.href="index.html";
}, function(error) {
  console.log(error.errorMessage)
});
}

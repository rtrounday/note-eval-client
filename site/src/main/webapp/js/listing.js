function getListing(userUid){
  // Update the listing with the latest properties in the Google Firebase database
  firebase.database().ref('users/' + userUid + "/notes").on('value', function(snapshot){
      $("#listingView").empty();
      if (!$("#filesView").is(":visible")){
      $(".list-group").empty();
        listProperties(snapshot, userUid);
      }});
    }
$(document).ready(function(){
  // Hide other views and display the listing of properties with associated notes
  $("#viewListing").on('click', function(){
    $("#listingView").show()
    $("#filesView, #main").hide()
    $("#listingView").empty();
    firebase.auth().onAuthStateChanged(function(user){
      if (user)
      {
        var userUid = user.uid;
        getListing(userUid);
      }
    });
  });
})

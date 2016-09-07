function getListing(userUid){
  firebase.database().ref('users/' + userUid + "/notes").on('value', function(snapshot){
      $("#listingView").empty();
      $("#listingView").append("<ul class='list-group'></ul>");
      $(".list-group").empty();
      snapshot.forEach(function(note){
        var address = note.child("City").val();
        var content = "<a>"
                    +   "<li class='list-group-item list-group-item-info'>"
                    +     "<p>List Entry</p>"
                    +   "</li>"
                    + "</a>";
        $(".list-group").append(content);
      });
  });
}
$(document).ready(function(){
  $("#viewListing").on('click', function(){
    $("#listingView").show()
    $("#filesView").hide()
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

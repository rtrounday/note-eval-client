function getListing(userUid){
  firebase.database().ref('users/' + userUid + "/notes").on('value', function(snapshot){
      $("#listingView").empty();
      $("#listingView").append("<ul class='list-group'></ul>");
      $(".list-group").empty();
      snapshot.forEach(function(note){
        var noteUid = note.key;
        var address = note.child("Street Address").val();
        var city = note.child("City").val();
        var UPB = note.child("Current UPB").val();
        var query = '/notedetails?userId=' + userUid + '&noteId=' + noteUid;
        var content =  "<li class='list-group-item list-group-item-info'>"
                    +     "<a href=" + query + ">" + address + '\t' + city + "\t$" + UPB + "</a>"
                    +   "</li>";
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

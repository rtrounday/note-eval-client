function getListing(userUid){
  firebase.database().ref('users/' + userUid + "/notes").on('value', function(snapshot){
      $("#listingView").empty();
      $("#listingView").append("<ul id='notelist' class='list-group'></ul>");
      $(".list-group").empty();
      var streetview_key = "AIzaSyCxokrZQ9-C8gCQKYkGtVK0J1X7UXM-9uw";

      snapshot.forEach(function(note){
        var noteUid = note.key;
        var address = note.child("Street Address").val();
        var city = note.child("City").val();
        var UPB = note.child("Current UPB").val();
        var params = {location: address + " " + city, key: streetview_key, size: "150x150"}
        var streetViewUrl =
            'https://maps.googleapis.com/maps/api/streetview?' + $.param(params)
        var query = '/notedetails?userId=' + userUid + '&noteId=' + noteUid;
        var content =  "<li class='list-group-item list-group-item-info'>"
                    +     "<img src=" + streetViewUrl + ">" + "</img>"
                    +     "<a href=" + query + ">" + address + '\t' + city + "\t$" + UPB + "</a>"
                    +   "</li>";
        $(".list-group").append(content);
      });
  });
}
$(document).ready(function(){
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

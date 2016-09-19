function updateFiles(userUid)
{
  firebase.database().ref('users/' + userUid + "/files").on('value', function(snapshot){
      $("#filesView").empty();
      $("#filesView").append("<ul id='filelist' class='list-group'></ul>");
      $(".list-group").empty();
      snapshot.forEach(function(file){
        var fileName = file.child("name").val();
        var fileURL = file.child("file_archive").val();
        var content = "<a href=" + fileURL + ">"
                    +   "<li class='list-group-item list-group-item-success'>"
                    +     "<p>" + fileName + "</p>"
                    +     "<a href='#' class ='fileSync' id=" + fileURL + ">"
                    +       "<span class='glyphicon glyphicon-refresh'></span>"
                    +     "</a>"
                    +   "</li>"
                    + "</a>";
        $(".list-group").append(content);
      });
  });
}
$(document).ready(function(){
  $("#viewFiles").on('click', function(){
    $('#filesView').show();
    $("#listingView, #main").hide()
    $("#filesView").empty();
    firebase.auth().onAuthStateChanged(function(user){
      if (user)
      {
        var userUid = user.uid;
        updateFiles(userUid);
      }
    });
  });
});

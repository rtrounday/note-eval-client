$(document).ready(function(){
  $("#viewFiles").one('click', function(){
    $('#filesView').show();
    firebase.auth().onAuthStateChanged(function(user){
      if (user)
      {
        var userUid = user.uid;
        firebase.database().ref('users/' + userUid + "/files").on('value', function(snapshot){
            $("#filesView").empty();
            snapshot.forEach(function(file){
              var fileName = file.child("name").val();
              var fileURL = file.child("file_archive").val();
              var content = "<a href=" + fileURL + ">" + fileName + "</a></br>";
              $("#filesView").append(content);
            });
        });
      }
    });
  });
  $("#viewFiles").on('click', function(){
    $('#filesView').show();
    $('#welcome').hide();
  });
});

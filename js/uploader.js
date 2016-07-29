$(document).ready(function(){
  $('#hiddenUploader').on('click', function(){
    $("#uploader").click();
  });
  $("#uploader").on('change', function(){
    var file = document.getElementById("uploader").files[0];
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var userUid = firebase.auth().currentUser.uid;
    var rawRef = storageRef.child('rawUploads/' + userUid + '/' + file.name);
    var uploadTask = rawRef.put(file);
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
    }, function(error) {
      // Handle unsuccessful uploads
    }, function() {
      // Handle successful uploads on complete
      var downloadURL = uploadTask.snapshot.downloadURL;
    });
  })


});

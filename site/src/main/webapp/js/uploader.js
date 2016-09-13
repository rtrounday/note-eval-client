function upload(file, userUid, rawRef){
  var uploadTask = rawRef.put(file);
  uploadTask.on('state_changed', function(snapshot){
    // Observe state change events such as progress, pause, and resume
  }, function(error) {
    // Handle unsuccessful uploads
    $("#notif").append(
    "<div class='alert alert-danger'>" +
    "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
    "<strong>Upload Failed: </strong>Internal Server Error." +
    "</div>");
  }, function() {
    // Handle successful uploads on complete
    var downloadURL = uploadTask.snapshot.downloadURL;
    // Updates metadata of file and stores a metadata copy in the database
    var fileUid = firebase.database().ref('users/' + userUid + "/files").push().key;
    rawRef.updateMetadata({customMetadata: {uid: fileUid, userId: userUid}}).then(function(metadata){
      firebase.database().ref('users/' + userUid + "/files/" + fileUid).update(
        {file_archive: downloadURL, name: file.name, uid: fileUid}
      );
      $("#notif").append(
      "<div class='alert alert-success'>" +
      "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
      "<strong>Upload Complete</strong>" +
      "</div>");
    });

  });
}
$(document).ready(function(){
  $('#hiddenUploader').on('click', function(){
    $("#uploader").click();
  });
  $("#uploader").on('change', function(){
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        // Retrive a storage location reference to keep the file
        var file = document.getElementById("uploader").files[0];
        var storage = firebase.storage();
        var storageRef = storage.ref();
        var userUid = user.uid;
        var rawRef = storageRef.child('rawUploads/' + userUid + '/' + file.name);

        // Clear the upload internal field.
        $("#uploader").val("");

        rawRef.getMetadata().catch(function(newFile){
          // Catch the file does not exist error and uploads the new file
          upload(file, userUid, rawRef);
        }).then(function(metadata){
          // Checks to see if the file already exists and reports duplicate to user
          if(metadata){
            var mediaUid = metadata.customMetadata.uid;
            if (mediaUid){
              $("#notif").append(
              "<div class='alert alert-warning'>" +
              "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
              "<strong>Upload Cancelled: </strong> File Already Exists." +
              "</div>");
            }
          }
        });

      }
    });
  });


});

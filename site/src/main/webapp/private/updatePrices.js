$(document).ready(function(){
  $("#filesView").on("click", ".fileSync", function(){
    $("#notif").append(
    "<div class='alert alert-success'>" +
    "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
    "<strong>Syncing file with analytics. Click My Notes to view progress.</strong>" +
    "</div>");
    var file = $(this).attr("id")
    // Access to the python server responsible for note analytics
    var priceUpdateScriptURL = "http://ec2-52-26-13-186.us-west-2.compute.amazonaws.com/cgi-bin/runUpdate.py"
    firebase.auth().onAuthStateChanged(function(user){
      var userUid = user.uid;
      $.ajax({method: "POST",
      url: priceUpdateScriptURL,
      data: JSON.stringify({'file' : file + "", 'userUid' : userUid}),
      crossDomain: true,
      // Notify User on Success and Failure
      success: function(result){
        console.log("Done.")
        $("#notif").append(
        "<div class='alert alert-success'>" +
        "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
        "<strong>Sync Complete!</strong>" +
        "</div>");
      },
      error: function(result){
        $("#notif").append(
        "<div class='alert alert-danger'>" +
        "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
        "<strong>Unable to process request at the moment</strong>" +
        "</div>");
      }
      })
    });
  });
});

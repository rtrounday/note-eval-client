$(document).ready(function(){
  $("#filesView").on("click", ".fileSync", function(){
    var file = $(this).attr("id")
    var priceUpdateScriptURL = "http://ec2-52-26-13-186.us-west-2.compute.amazonaws.com/cgi-bin/runUpdate.py"
    firebase.auth().onAuthStateChanged(function(user){
      var userUid = user.uid;
      $.ajax({method: "POST",
      url: priceUpdateScriptURL,
      data: JSON.stringify({'file' : file + "", 'userUid' : userUid}),
      crossDomain: true,
      success: function(result){
        console.log(result);
      }})
    });
  });
});

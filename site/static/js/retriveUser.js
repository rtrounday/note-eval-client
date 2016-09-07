function goHome(){
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      var userUid = user.uid;
      firebase.database().ref('users/' + userUid + '/username').on(
        'value', function(snapshot){
          $("#welcome").text("Hello, " + snapshot.val());
          $("#welcome").show();
        }
      );
      $("#filesView").hide();
    }
  });
}
$(document).ready(function(){
  goHome();
});

$(document).ready(function(){
$("#updatePrices").click(function(){
  var file = "http://ec2-52-26-13-186.us-west-2.compute.amazonaws.com/cgi-bin/helloworld.py"
  $.ajax({method: "POST", data: {"text": "Testing text"}, url: file , success: function(result){
    alert(result);
  }});
});
});

function validateForm(email, password, first_name, last_name, confirmPass){
  // Form is a login form
  if (typeof first_name == "undefined" && typeof last_name == "undefined" && typeof confirmPass == "undefined"){
    if (email == "" && password == ""){
      return false;
    }
    return true;
    // Rest of validation is taken care of on the server side
  }
  // Form is a sign up form
  if (first_name == "" && last_name == "" && email == "" && password == "" && confirmPass == ""){
    $("#alert").show();
    $("#alert").removeClass();
    $("#alert").addClass("alert alert-success");
    $("#alertMessage").replaceWith("<p id='alertMessage'>Welcome to Loan Notes Evaluator</p>");
    return false;
  }
  else if (first_name == "" || last_name == ""){
    $("#alert").show();
    $("#alert").removeClass();
    $("#alert").addClass("alert alert-danger");
    $("#alertMessage").replaceWith("<p id='alertMessage'>Please enter a valid name</p>");
    return false;
  }
  else if (password != confirmPass){
    $("#alert").show();
    $("#alert").removeClass();
    $("#alert").addClass("alert alert-danger");
    $("#alertMessage").replaceWith("<p id='alertMessage'>Passwords do not match</p>");
    return false;
  }
  else if (email == ""){
    $("#alert").show();
    $("#alert").removeClass();
    $("#alert").addClass("alert alert-danger");
    $("#alertMessage").replaceWith("<p id='alertMessage'>Please enter an email</p>");
    return false;
  }
  else {
    return true;
  }
}

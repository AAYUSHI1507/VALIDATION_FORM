function validate() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("cpassword").value;
  // console.log(`${username} ${email}`)

  checkusername(username);
  checkmail(email);
  checkpassword(password);
  checkpasswordmatch(password, cpassword);
}

function checkusername(username) {
  // TODO write username validate code here
  if (username.length > 7) {
    document.getElementById("username").classList.add("success");
    document.getElementById("username").classList.replace("error", "success");
    document.getElementById("username_error").innerHTML = "";
  } else {
    document.getElementById("username").classList.add("error");
    document.getElementById("username_error").innerText =
      "username must be 8 letter long";
  }
}

function checkmail(email) {
  // TODO WRITE MAIL VALIDATION HERE
  if (email.length > 8 && email.includes("@gmail")) {
    document.getElementById("email").classList.add("success");
    document.getElementById("email").classList.replace("error", "success");
    document.getElementById("email_error").innerHTML = "";
  } else {
    document.getElementById("email").classList.add("error");
    document.getElementById("email_error").innerText =
      "email length must contain @gmail.com, 8 letters long";
  }
}

function checkpassword(password) {
  // TODO write password validation form
  if (password.length > 8 && password.includes(".")) {
    document.getElementById("password").classList.add("success");
    document.getElementById("password").classList.replace("error", "success");
    document.getElementById("password_error").innerHTML = "";
  } else {
    document.getElementById("password").classList.add("error");
    document.getElementById("password_error").innerText =
      "password must be 8 letter long and must include .";
  }
}
function checkpasswordmatch(password, cpassword) {
  if (password == cpassword && password != "") {
    document.getElementById("cpassword").classList.add("success");
    document.getElementById("cpassword").classList.replace("error", "success");
    document.getElementById("cpassword_error").innerHTML = "";
  } else {
    document.getElementById("cpassword").classList.add("error");
    document.getElementById("cpassword_error").innerText =
      "password not matched";
  }
}

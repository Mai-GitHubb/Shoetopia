function signin() {
  var username = document.getElementById("username").value;
  // Check if username input is empty
  if (username.trim() === "") {
      document.getElementById("noNameError").innerHTML = "*Please enter your name or Log in as a Guest!";
      return;
  }
  localStorage.setItem("username", username);
  window.location.href = "home.html"; 
}

function guest() {
  var username = 'Guest';
  localStorage.setItem("username", username);
  window.location.href = "home.html";
}



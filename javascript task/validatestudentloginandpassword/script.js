// Beginner-style login validation

function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var message = document.getElementById("message");

  // Simple hardcoded validation (like a beginner would do)
  if (username === "" || password === "") {
    message.style.color = "red";
    message.innerText = "Please enter both username and password!";
    return false;
  }

  if (username === "student" && password === "12345") {
    message.style.color = "green";
    message.innerText = "Login successful 🎉";
    return false; // prevent actual form submission
  } else {
    message.style.color = "red";
    message.innerText = "Invalid username or password ❌";
    return false;
  }
}

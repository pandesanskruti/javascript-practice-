// Beginner-style form validation

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var contact = document.getElementById("contact").value;
  var message = document.getElementById("message");

  // Simple validation
  if (name === "" || email === "" || contact === "") {
    message.style.color = "red";
    message.innerText = "Please fill all fields!";
    return false;
  }

  // Email validation (basic)
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    message.style.color = "red";
    message.innerText = "Invalid email format!";
    return false;
  }

  // Contact number validation (10 digits)
  if (isNaN(contact) || contact.length !== 10) {
    message.style.color = "red";
    message.innerText = "Contact number must be 10 digits!";
    return false;
  }

  // Success
  message.style.color = "green";
  message.innerText = "✅ Form submitted successfully!";
  return false; // prevent actual form submission
}

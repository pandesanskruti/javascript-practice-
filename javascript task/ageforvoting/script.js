// Beginner-style age validation for voting

function validateAge() {
  var age = document.getElementById("age").value;
  var result = document.getElementById("result");

  age = Number(age);

  // Simple validation
  if (age === 0) {
    result.style.color = "red";
    result.innerText = "Please enter a valid age!";
    return false;
  }

  // Voting age check (18+)
  if (age >= 18) {
    result.style.color = "green";
    result.innerText = "✅ You are eligible to vote!😊";
  } else {
    result.style.color = "red";
    result.innerText = "❌ You are not eligible to vote!😞";
  }

  return false; // prevent form submission
}

// Beginner-style simple interest calculation

function calculateInterest() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var time = document.getElementById("time").value;
  var result = document.getElementById("result");

  // Convert to numbers
  principal = Number(principal);
  rate = Number(rate);
  time = Number(time);

  // Simple validation
  if (principal === 0 || rate === 0 || time === 0) {
    result.style.color = "red";
    result.innerText = "Please enter valid values!";
    return false;
  }

  // Formula: SI = (P × R × T) / 100
  var interest = (principal * rate * time) / 100;

  result.style.color = "green";
  result.innerText = "Simple Interest: ₹" + interest.toFixed(2);

  return false; // prevent form submission
}

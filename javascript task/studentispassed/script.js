// Beginner-style percentage calculation with pass/fail check

function calculatePercentage() {
  var marksObtained = document.getElementById("marksObtained").value;
  var totalMarks = document.getElementById("totalMarks").value;
  var passPercent = document.getElementById("passPercent").value;
  var result = document.getElementById("result");
  var status = document.getElementById("status");

  // Convert to numbers
  marksObtained = Number(marksObtained);
  totalMarks = Number(totalMarks);
  passPercent = Number(passPercent);

  // Simple validation
  if (marksObtained === 0 || totalMarks === 0 || passPercent === 0) {
    result.style.color = "red";
    result.innerText = "Please enter valid values!";
    status.innerText = "";
    return false;
  }

  if (marksObtained > totalMarks) {
    result.style.color = "red";
    result.innerText = "Marks obtained cannot be greater than total marks!";
    status.innerText = "";
    return false;
  }

  // Calculate percentage
  var percentage = (marksObtained / totalMarks) * 100;

  result.style.color = "blue";
  result.innerText = "Percentage: " + percentage.toFixed(2) + "%";

  // Pass/Fail check
  if (percentage >= passPercent) {
    status.style.color = "green";
    status.innerText = "🎉 Student Passed!";
  } else {
    status.style.color = "red";
    status.innerText = "❌ Student Failed!";
  }

  return false; // prevent form submission
}

// Beginner-style percentage calculation

function calculatePercentage() {
  var marksObtained = document.getElementById("marksObtained").value;
  var totalMarks = document.getElementById("totalMarks").value;
  var result = document.getElementById("result");

  // Convert to numbers
  marksObtained = Number(marksObtained);
  totalMarks = Number(totalMarks);

  // Simple validation
  if (marksObtained === 0 || totalMarks === 0) {
    result.style.color = "red";
    result.innerText = "Please enter valid marks!";
    return false;
  }

  if (marksObtained > totalMarks) {
    result.style.color = "red";
    result.innerText = "Marks obtained cannot be greater than total marks!";
    return false;
  }

  // Calculate percentage
  var percentage = (marksObtained / totalMarks) * 100;

  result.style.color = "green";
  result.innerText = "Percentage: " + percentage.toFixed(2) + "%";

  return false; // prevent form submission
}

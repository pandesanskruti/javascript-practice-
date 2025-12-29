// Beginner-style function to reveal characters one by one

function showCharacters() {
  var text = document.getElementById("inputText").value;
  var result = document.getElementById("result");
  result.innerText = "Output: "; // reset

  // Simple validation
  if (text === "") {
    result.style.color = "red";
    result.innerText = "Please enter some text!";
    return false;
  }

  var i = 0;

  function revealNext() {
    if (i < text.length) {
      result.innerText += text.charAt(i);
      i++;
      setTimeout(revealNext, 200); // delay 200ms
    }
  }

  revealNext();

  return false; // prevent form submission
}

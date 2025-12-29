// Beginner-style function to multiply 3 numbers with party blast

function multiplyNumbers() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var num3 = document.getElementById("num3").value;
  var result = document.getElementById("result");

  // Convert to numbers
  num1 = Number(num1);
  num2 = Number(num2);
  num3 = Number(num3);

  // Simple validation
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    result.style.color = "red";
    result.innerText = "Please enter valid numbers!";
    return false;
  }

  // Multiply
  var product = num1 * num2 * num3;

  result.style.color = "green";
  result.innerText = "Result: " + product;

  // Trigger party blast 🎉
  startConfetti();

  return false; // prevent form submission
}

// Confetti animation (simple beginner style)
var canvas = document.getElementById("confettiCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var confetti = [];

function startConfetti() {
  confetti = [];
  for (var i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 100,
      color: "hsl(" + Math.random() * 360 + ",100%,50%)",
      tilt: Math.random() * 10 - 10
    });
  }
  requestAnimationFrame(drawConfetti);
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < confetti.length; i++) {
    var c = confetti[i];
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += 2;
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawConfetti);
}

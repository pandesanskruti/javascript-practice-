// Simple functions to calculate total marks

// 1. Parameterised Function
function totalMarks(marks) {
  var sum = 0;
  for (var i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  return sum;
}

// 2. Arrow Function
var totalMarksArrow = (marks) => {
  var sum = 0;
  for (var i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  return sum;
};

// 3. Anonymous Function
var totalMarksAnon = function(marks) {
  var sum = 0;
  for (var i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  return sum;
};

// 4. Function Expression
var totalMarksExpr = function(marks) {
  var sum = 0;
  for (var i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  return sum;
};

// Calculate function
function calculateMarks(type) {
  var input = document.getElementById("marksInput").value;
  var marksText = input.split(",");
  var marks = [];

  for (var i = 0; i < marksText.length; i++) {
    marks.push(Number(marksText[i]));
  }

  var total = 0;

  if (type === 'param') {
    total = totalMarks(marks);
  } else if (type === 'arrow') {
    total = totalMarksArrow(marks);
  } else if (type === 'anon') {
    total = totalMarksAnon(marks);
  } else if (type === 'expr') {
    total = totalMarksExpr(marks);
  }

  document.getElementById("result").innerText = "Total: " + total;
}

// 🎨 Theme Switcher (beginner style)
var themes = [
  {bg: "linear-gradient(135deg, #74ebd5, #ACB6E5)", text: "black"},
  {bg: "linear-gradient(135deg, #ff9a9e, #fad0c4)", text: "black"},
  {bg: "linear-gradient(135deg, #a1c4fd, #c2e9fb)", text: "black"},
  {bg: "linear-gradient(135deg, #434343, #000000)", text: "white"},
  {bg: "linear-gradient(135deg, #f6d365, #fda085)", text: "black"}
];

var currentTheme = 0;

document.getElementById("themeBtn").onclick = function() {
  currentTheme = currentTheme + 1;
  if (currentTheme >= themes.length) {
    currentTheme = 0;
  }
  document.body.style.background = themes[currentTheme].bg;
  document.body.style.color = themes[currentTheme].text;
};

// Set first theme
document.body.style.background = themes[0].bg;
document.body.style.color = themes[0].text;

document.getElementById("left").href = "reality.html";
document.getElementById("right").href = "idealisation_b.html";

var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var button = document.getElementById("change-content-button");
var range = document.getElementById("image_changer_slider");
var contents = [content1, content2, content3];
var contentIndex = 0;

button.addEventListener("click", function () {
  contents[contentIndex].style.display = "none";
  contentIndex = (contentIndex + 1) % contents.length;
  contents[contentIndex].style.display = "block";

  if (contentIndex === contents.length - 1) {
    button.style.display = "none";
    range.style.display = "block";
  }
});

var stage;
var v_list = ["--x1", "--x2", "--x3", "--x4", "--x5", "--x6"];
function map(value, n1, n2, n3, n4) {
  return ((value - n1) / (n2 - n1)) * (n4 - n3) + n3;
}

function Changer(value) {
  const docx = document.documentElement;

  stage = value;

  for (let i = 1; i <= 6; i++) {
    if (value >= i) {
      docx.style.setProperty(v_list[i - 1], 1);
    } else {
      docx.style.setProperty(v_list[i - 1], 0);
    }
  }

  if (0 <= value && value <= 3) {
    docx.style.setProperty("--piston_carnot", 0);
    docx.style.setProperty("--engine", map(value, 1.5, 0, 0, 1));
    docx.style.setProperty("--piston", map(value, 2, 0, 1, 0));
  } else {
    docx.style.setProperty("--engine", 0);
  }
  if (5 < value && value <= 6) {
    docx.style.setProperty("--piston_carnot", map(value, 5, 6, 0, 1));
    docx.style.setProperty("--piston", map(value, 5, 6, 1, 0));
  }

  if (value == 6) {
    docx.style.setProperty("--piston", 0);
    docx.style.setProperty("--piston_carnot", 1);
  }
}

document.getElementById("left").href = "reality.html";
document.getElementById("right").href = "geometric_a.html";

var stage;
var v_list = ["--x1", "--x2", "--x3", "--x4", "--x5", "--x6"];

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
}

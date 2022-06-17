document.getElementById("left").href = "reality.html";
document.getElementById("right").href = "geometric_a.html";

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
  // console.log('value:', 
  //   value, 'engine:',
  //   docx.style.getPropertyValue("--engine"),'piston:',
  //   docx.style.getPropertyValue("--piston"),'piston_carnot:',
  //   docx.style.getPropertyValue("--piston_carnot")
  // );
  // console.log(value);
  if (0 <= value && value <= 2) {
    docx.style.setProperty("--piston_carnot", 0);
    docx.style.setProperty("--engine", map(value, 2, 0, 0, 1));
    docx.style.setProperty("--piston", map(value, 2, 0, 1, 0));
  } else {
    docx.style.setProperty("--engine", 0);
  }
  if (2 < value && value <= 4) {
    docx.style.setProperty("--piston_carnot", map(value, 2, 4, 0, 1));
    docx.style.setProperty("--piston", map(value, 2, 4, 1, 0));
  } else if (value > 4) {
    docx.style.setProperty("--piston", 0);
    docx.style.setProperty("--piston_carnot", 1);
  }
  // if (2 < value && value <= 3) {
  //   docx.style.setProperty("--piston_carnot", map(value, 2, 3, 1, 0));
  // } else if (value > 2) {
  //   docx.style.setProperty("--piston_carnot", 1);
  // }
}

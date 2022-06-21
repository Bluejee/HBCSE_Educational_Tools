document.getElementById("left").href = "algebra.html";
document.getElementById("right").href = "solution.html";

// *********************** PENDULUM PART************** //

function xplain(i) {
  a = select("#exp0").html();
  b = select("#exp1").html();
  l = [a, b];
  select("#content_2").html(l[i]);
}

function setup() {}

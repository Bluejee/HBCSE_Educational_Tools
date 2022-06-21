document.getElementById("left").href = "algebra_b.html";
document.getElementById("right").href = "solution_b.html";
let th = 0;
let tc = 0;
let eff = 0;
const th_text = document.getElementById("th_text");
const tc_text = document.getElementById("tc_text");
const eff_text = document.getElementById("eff_text");
let i = 0;
let initial_eff_text;

function change() {
  th = float(select("#th").value());
  tc = float(select("#tc").value());
  eff = 1 - tc / th;
  eff = eff.toPrecision(4)*100;
  th_text.innerHTML = "The Source Tempreature = " + th.toString() + " K";
  tc_text.innerHTML = "The Sink Tempreature = " + tc.toString() + " K";

  if (i == 0) {
    console.log(eff_text.innerHTML);
    initial_eff_text = eff_text.innerHTML;
    i = 1;
    // We use this check as if we do this initially it just loads
    // the string before the mathjax has parsed it.
  }

  eff_text.innerHTML = initial_eff_text + " " + eff.toString() + ' %';
}

// https://galileo.phys.virginia.edu/classes/152.mf1i.spring02/CarnotEngine.htm
// a good reference.
function setup() {}

// function draw() {
//   /***Usual Draw function***/
//   background(255, 0, 255);
// }

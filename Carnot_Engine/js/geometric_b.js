document.getElementById("left").href = "geometric_a.html";
document.getElementById("right").href = "algebra.html";

//******************info part***********************//
const el = document.getElementById("infor");
let graph_img;
function remov() {
  el.innerHTML = "";
}
count_ie = false;
count_ae = false;
count_ic = false;
count_ac = false;
//notes on IE
function ienote(item) {
  if (count_ie == false) {
    count_ie = true;
    graph_img = cc_1;
    el.innerHTML =
      '<text>In Isothermal Expansion, The temprature remains constant. Heat is given to the system.</text><button onclick="remov()">ok</button>';
  } else {
    item.checked = "true";
  }
}

//notes on AE
function aenote(item) {
  if (count_ae == false) {
    count_ie = true;
    count_ae = true;
    graph_img = cc_2;
    el.innerHTML =
      '<text>In Adiabatic Expansion, Heat is not exchanged. The Temprature Changes.</text><button onclick="remov()">ok</button>';
  } else {
    item.checked = "true";
  }
}
//notes on IC
function icnote(item) {
  if (count_ic == false) {
    count_ie = true;
    count_ae = true;
    count_ic = true;
    graph_img = cc_3;
    el.innerHTML =
      '<text>In Isothermal Compression, The temprature remains constant. Heat is Taken from the system.</text><button onclick="remov()">ok</button>';
  } else {
    item.checked = "true";
  }
}

//notes on AC
function acnote(item) {
  if (count_ac == false) {
    count_ie = true;
    count_ae = true;
    count_ic = true;
    count_ac = true;
    graph_img = cc_4;
    el.innerHTML =
      '<text>In Adiabatic Compression, Heat is not exchanged. The Temprature Changes.</text><button onclick="remov()">ok</button>';
      // Activating procede button
      document.documentElement.style.setProperty('--procede',1)
  } else {
    item.checked = "true";
  }
}

// ************** Graph PART ************** //

function preload() {
  cc_0 = loadImage("./images/Carnot_Cycle_0.png");
  cc_1 = loadImage("./images/Carnot_Cycle_1.png");
  cc_2 = loadImage("./images/Carnot_Cycle_2.png");
  cc_3 = loadImage("./images/Carnot_Cycle_3.png");
  cc_4 = loadImage("./images/Carnot_Cycle_4.png");
}

function setup() {
  /***Create a canvas aka setup***/

  const wide = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const tall = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  p = wide * 0.5;
  q = tall * 0.65;
  var canvas = createCanvas(p, q);
  canvas.parent("section_2");

  let s = min(width, height);
  cc_0.resize(s,s);
  cc_1.resize(s,s);
  cc_2.resize(s,s);
  cc_3.resize(s,s);
  cc_4.resize(s,s);

  imageMode(CENTER);

  graph_img = cc_0;
}

function draw() {
  /***Usual Draw function***/
  background(255, 255, 255);
  img_graph = image(graph_img, width / 2, height / 2);
}

function mousePressed() {}
function mouseReleased() {}

function mouseDragged() {}

document.getElementById("left").href = "geometric_b.html";
document.getElementById("right").href = "algebra_b.html";

function shw(n) {
  im_list = [cc_1, cc_2, cc_3, cc_4];
  graph_img = im_list[n];

  ie = 'In Isothermal Expansion, Heat is given into the system. It is this heat that causes the piston to rise upwards.'
  ae = 'In Adiabatic Expansion, There is no heat exchange. The movement of the piston is due to the internal energy being converted into work. Pressure drops rapidly during this phase.' 
  ic = 'In Isothermal Compression, Heat is taken out of the system. This causes the Piston to come downwards.'
  ac = 'In Adiabatic Compression, There is no heat exchange. The movement of the piston is due to the internal energy change. Pressure increases rapidly during this phase.' 

  tx_list = [ie,ae,ic,ac]
  select("#section_2_2").html(tx_list[n])
}

function preload() {
  cc_0 = loadImage("./images/Carnot_Cycle_0.png");
  cc_1 = loadImage("./images/Carnot_Cycle_1.png");
  cc_2 = loadImage("./images/Carnot_Cycle_2.png");
  cc_3 = loadImage("./images/Carnot_Cycle_3.png");
  cc_4 = loadImage("./images/Carnot_Cycle_4.png");
}

function setup() {
  let s = min(select("#section_2").width, select("#section_2").height);
  canvas = createCanvas(s, s);
  canvas.id("default_canvas");
  canvas.parent("section_2_1");
  canvas.parent("section_2_1");

  cc_0.resize(s, s);
  cc_1.resize(s, s);
  cc_2.resize(s, s);
  cc_3.resize(s, s);
  cc_4.resize(s, s);

  graph_img = cc_0;

  imageMode(CENTER);
}
function draw() {
  /***Usual Draw function***/
  background(255, 255, 255);
  img_graph = image(graph_img, width / 2, height / 2);
}

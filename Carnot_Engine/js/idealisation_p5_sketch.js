var piston;
var hotBath;
var coldBath;
var isolatedStand;
var cylider_width;
var animate_engine;

var show_piston = false;
var show_stand = false;
var show_baths = false;

function preload() {
  piston_chamber = loadImage("Images/Carnot_Engine_Cylinder.png");
  piston = loadImage("Images/Carnot_Engine_Piston.png");
  hotBath = loadImage("Images/Stand_Red.png");
  coldBath = loadImage("Images/Stand_Green.png");
  isolatedStand = loadImage("Images/Stand_Grey.png");
}

function checkstate() {
  if (q_and_a_index === 0) {
    show_piston = true;
  }
  if (q_and_a_index === 1) {
    show_baths = true;
  }
  if (q_and_a_index === 2) {
    show_stand = true;
  }
}
// This function is called in the idealisation_b.js

// piston_state = 0;
// function animate_engine(){
//     if piston_state = 
// }

function setup() {
  s = min(select("#section_2").width, select("#section_2").height);
  canvas = createCanvas(s, s);
  canvas.id("default_canvas");
  canvas.parent("section_2");
  // canvas.style("border", "outset");
  // canvas.style("border-width", "0.01%");
  // canvas.style("border-color", "black");
  pixelDensity(1);
  background(255, 255, 255);

  cylinder_width = 0.2 * width;
  cylinder_height = (hotBath.height * cylinder_width) / hotBath.width;
  cylinder_center_height = -cylinder_height;

  piston_chamber_width = cylinder_width / 2;
  piston_chamber_height =
    (piston_chamber.height * piston_chamber_width) / piston_chamber.width;
  piston_height = (piston.height * piston_chamber_width) / piston.width;

  piston_chamber_center_height =
    cylinder_center_height - piston_chamber_height + piston_chamber_width / 9;

  translate(0, height);
  imageMode(CENTER);
}

function draw() {
  background("bisque");
  translate(0, height);
  imageMode(CENTER);
  if (show_baths) {
    image(
      hotBath,
      0.25 * width,
      cylinder_center_height,
      cylinder_width,
      cylinder_height
    );
    image(
      coldBath,
      0.75 * width,
      cylinder_center_height,
      cylinder_width,
      cylinder_height
    );
  }
  if (show_stand) {
    image(
      isolatedStand,
      0.5 * width,
      cylinder_center_height,
      cylinder_width,
      cylinder_height
    );
  }
  if (show_piston) {
    image(
      piston,
      0.5 * width,
      piston_chamber_center_height,
      piston_chamber_width,
      piston_height
    );
    image(
      piston_chamber,
      0.5 * width,
      piston_chamber_center_height,
      piston_chamber_width,
      piston_chamber_height
    );
  }
}

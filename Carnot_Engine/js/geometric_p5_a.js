///<reference path="./p5.global-mode.d.ts" />
// The above line is used to get autocompletion for the p5 functions.
// The typescript file for the same have been put in this folder.
console.clear();

var canvas;
var stage = 0;
var eng_tint = 0;
var pist_tint = 0;
let engine;
let p;
function preload() {
  piston_cyl = loadImage("./images/Carnot_Engine_Cylinder.png");
  piston_rod = loadImage("./images/Carnot_Engine_Piston.png");
  stands = loadImage("./images/Stands.png");
}

/////////////////////////////////////////////////////////////////////////////////

function setup() {
  w = select("#section_2").width;
  h = select("#section_2").height;
  canvas = createCanvas(w, h);
  canvas.id("default_canvas");
  canvas.parent("section_2");

  // program setup
  imageMode(CENTER);
  stands.resize(width, (width * stands.height) / stands.width);
  piston_cyl.resize(
    width / 6,
    ((width / 6) * piston_cyl.height) / piston_cyl.width
  );
  p = new Piston(100, 100, 0, piston_cyl, piston_rod);
}

function draw() {
  clear();
  fill(255, 0, 0);
  line(width / 3, 0, width / 3, height);
  line((2 * width) / 3, 0, (2 * width) / 3, height);

  stand_img = image(stands, width / 2, height - (stands.height/2));

  p.show_piston();
}

//////////////////////////////////////////////////////////////////////////////////////

function windowResized() {
  w = select("#section_2").width;
  h = select("#section_2").height;

  resizeCanvas(w, h);

  stands.resize(width, (width * stands.height) / stands.width);
  piston_cyl.resize(
    width / 6,
    ((width / 6) * piston_cyl.height) / piston_cyl.width
  );
}

function mousePressed() {
  // p.in_piston(mouseX, mouseY)
  // p.x = mouseX;
  // p.y = mouseY;
}

function mouseDragged() {
  if (p.in_piston(mouseX, mouseY)) {
    p.x = mouseX;
    p.y = mouseY;
  }
}

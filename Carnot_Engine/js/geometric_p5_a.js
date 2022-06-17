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
  stand_red = loadImage("./images/Stand_Red.png");
  stand_green = loadImage("./images/Stand_Green.png");
  stand_grey = loadImage("./images/Stand_Grey.png");
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
  stand_red.resize(
    (0.8 * width) / 3,
    (((0.8 * width) / 3) * stand_red.height) / stand_red.width
  );
  stand_green.resize(
    (0.8 * width) / 3,
    (((0.8 * width) / 3) * stand_green.height) / stand_green.width
  );
  stand_grey.resize(
    (0.8 * width) / 3,
    (((0.8 * width) / 3) * stand_grey.height) / stand_grey.width
  );

  piston_cyl.resize(
    width / 6,
    ((width / 6) * piston_cyl.height) / piston_cyl.width
  );

  p = new Piston(
    width / 2,
    height - piston_cyl.height / 3 - stand_grey.height,
    0,
    piston_cyl,
    piston_rod
  );
}

function draw() {
  clear();
  fill(255, 0, 0);
  stroke(255, 0, 0);
  line(width / 3, 0, width / 3, height);
  line((2 * width) / 3, 0, (2 * width) / 3, height);
  stroke(0, 255, 0);
  line(width / 6, 0, width / 6, height);
  line((3 * width) / 6, 0, (3 * width) / 6, height);
  line((5 * width) / 6, 0, (5 * width) / 6, height);

  stroke(0);
  img_stand_red = image(stand_red, width / 2, height - stand_red.height / 2);
  img_stand_green = image(
    stand_green,
    width / 6,
    height - stand_green.height / 2
  );
  img_stand_grey = image(
    stand_grey,
    (5 * width) / 6,
    height - stand_grey.height / 2
  );
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

function mouseReleased() {
  if (p.in_piston(mouseX, mouseY)) {
    if (mouseX < width / 3) {
      p.x = width / 6;
      p.y = height - piston_cyl.height / 3 - stand_green.height;
    } else if (mouseX < (2 * width) / 3) {
      p.x = width / 2;
      p.y = height - piston_cyl.height / 3 - stand_red.height;
    } else if (mouseX < width) {
      p.x = (5 * width) / 6;
      p.y = height - piston_cyl.height / 3 - stand_grey.height;
    } else {
      print("WTH");
    }
  }
}

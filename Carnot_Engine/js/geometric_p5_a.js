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
let graph_img;

function preload() {
  piston_cyl = loadImage("./images/Carnot_Engine_Cylinder.png");
  piston_rod = loadImage("./images/Carnot_Engine_Piston.png");
  stand_red = loadImage("./images/Stand_Red.png");
  stand_green = loadImage("./images/Stand_Green.png");
  stand_grey = loadImage("./images/Stand_Grey.png");
  cc_0 = loadImage("./images/Carnot_Cycle_0.png");
  cc_1 = loadImage("./images/Carnot_Cycle_1.png");
  cc_2 = loadImage("./images/Carnot_Cycle_2.png");
  cc_3 = loadImage("./images/Carnot_Cycle_3.png");
  cc_4 = loadImage("./images/Carnot_Cycle_4.png");
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
  //////////////////////////////////////////////////////////////////
  // Resizing with proper scaling but doesnt work if the height of
  // the screen is small
  // stand_red.resize(
  //   (0.8 * width) / 3,
  //   (((0.8 * width) / 3) * stand_red.height) / stand_red.width
  // );
  // stand_green.resize(
  //   (0.8 * width) / 3,
  //   (((0.8 * width) / 3) * stand_green.height) / stand_green.width
  // );
  // stand_grey.resize(
  //   (0.8 * width) / 3,
  //   (((0.8 * width) / 3) * stand_grey.height) / stand_grey.width
  // );

  // piston_cyl.resize(
  //   width / 6,
  //   ((width / 6) * piston_cyl.height) / piston_cyl.width
  // );
  /////////////////////////////////////////////////////////////////////
  stand_red.resize((0.6 * width) / 3, 0.4 * height);
  stand_green.resize((0.6 * width) / 3, 0.4 * height);
  stand_grey.resize((0.6 * width) / 3, 0.4 * height);

  piston_cyl.resize(width / 8, 0.4 * height);
  piston_rod.resize(width / 8.4, width / 8.4);

  cc_0.resize(0.4 * width, 0.4 * width);
  cc_1.resize(0.4 * width, 0.4 * width);
  cc_2.resize(0.4 * width, 0.4 * width);
  cc_3.resize(0.4 * width, 0.4 * width);
  cc_4.resize(0.4 * width, 0.4 * width);

  graph_img = cc_0;
  ////////////////////////////////////////////////////////////////

  p = new Piston(
    width / 2,
    height - piston_cyl.height / 3 - stand_grey.height,
    0,
    piston_cyl,
    piston_rod
  );
}

function draw() {
  // clear();
  background(240, 248, 255);
  // fill(255, 0, 0);
  // stroke(255, 0, 0);
  // line(width / 3, 0, width / 3, height);
  // line((2 * width) / 3, 0, (2 * width) / 3, height);
  // stroke(0, 255, 0);
  // line(width / 6, 0, width / 6, height);
  // line((3 * width) / 6, 0, (3 * width) / 6, height);
  // line((5 * width) / 6, 0, (5 * width) / 6, height);

  // image Setup
  stroke(0);
  img_stand_grey = image(stand_grey, width / 2, height - stand_grey.height / 2);
  img_stand_red = image(stand_red, width / 6, height - stand_red.height / 2);
  img_stand_green = image(
    stand_green,
    (5 * width) / 6,
    height - stand_green.height / 2
  );
  imageMode();
  img_graph = image(
    graph_img,
    width - graph_img.width / 2,
    graph_img.height / 2
  );
  p.show_piston();
  p.change_h(0.01);
}

//////////////////////////////////////////////////////////////////////////////////////

function windowResized() {
  w = select("#section_2").width;
  h = select("#section_2").height;

  resizeCanvas(w, h);
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
  if (p.x < width / 3) {
    p.x = width / 6;
    // p.y = height - piston_cyl.height / 3 - stand_green.height;
    p.y = p.default_y;
  } else if (p.x < (2 * width) / 3) {
    p.x = width / 2;
    // p.y = height - piston_cyl.height / 3 - stand_red.height;
    p.y = p.default_y;
  } else if (p.x < width) {
    p.x = (5 * width) / 6;
    // p.y = height - piston_cyl.height / 3 - stand_grey.height;
    p.y = p.default_y;
  } else {
    print("WTH");
  }

  p.check_change_stage();
}

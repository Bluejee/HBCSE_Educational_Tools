///<reference path="./p5.global-mode.d.ts" />
// The above line is used to get autocompletion for the p5 functions.
// The typescript file for the same have been put in this folder.
console.clear();

var canvas;
var stage = 0;
var eng_tint = 0;
var pist_tint = 0;
let engine;
function preload() {
  engine = loadImage("./images/Engine_gif.gif");
  piston = loadImage("./images/piston.gif");
  piston2 = loadImage("./images/piston2.webp");
}

function setup() {
  w = select("#section_2").width;
  h = select("#section_2").height;
  canvas = createCanvas(w, h);
  canvas.id("default_canvas");
  canvas.parent("section_2");
}
function windowResized() {
  w = select("#section_2").width;
  h = select("#section_2").height;
  resizeCanvas(w, h);
}

function mousePressed() {
  print(stage);
}

function draw() {
  clear();
  fill(255, 0, 0);


  // print(stage, eng_tint, pist_tint);
  print(engine)
  a = image(
    engine,
    10,
    10,
    0.3 * width,
    (0.3 * width * engine.height) / engine.width
  );

  if (0 <= stage <= 1) {
    eng_tint = map(stage, 1, 0, 0, 256);
  } else {
    eng_tint = 0;
  }
  tint(255, eng_tint);

  // image(
  //   piston,
  //   200,
  //   10,
  //   0.3 * width,
  //   (0.3 * width * engine.height) / engine.width
  // );
  
  // if (0 <= stage <= 1) {
  //   pist_tint = map(stage, 0, 1, 0, 256);
  // } else {
  //   pist_tint = 0;
  // }
  // tint(255,pist_tint);
}

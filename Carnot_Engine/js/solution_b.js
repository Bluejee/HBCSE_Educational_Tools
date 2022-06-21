document.getElementById("left").href = "solution.html";
document.getElementById("right").href = "overview.html";

function preload() {
  base_graph = loadImage("./images/Base_Graph_2.png");
}

let check;

let size = 50;
const zeros = (m, n) => [...Array(m)].map((e) => Array(n).fill(0));

//Create a canvas
function setup() {
  s = min(select("#section_2").width, select("#section_2").height);
  canvas = createCanvas(s, s);
  canvas.id("default_canvas");
  canvas.parent("section_2");
  // canvas.style("border", "outset");
  // canvas.style("border-width", "0.01%");
  // canvas.style("border-color", "black");
  pixelDensity(1);
  base_graph.resize(s, s);
  background(255, 255, 255);
  check = zeros(height, width);
}

//Usual Draw function//
function draw() {
  noStroke();

  fill(255, 255, 255);
  rect(0, 0, (1 / 11) * width, height);
  rect(0, (10 / 11) * height, width, height);
  img_graph = image(base_graph, 0, 0);
  size = select("#size").value();

}

function x_at_point(x) {
  return map(x, 0, width, -100, 1000);
}

function y_at_point(y) {
  return map(y, 0, height, 1000, -100);
}

function fill_sqr(x, y) {
  loadPixels();
  for (var i = x - size / 2; i <= x + size / 2; i++) {
    for (var j = y - size / 2; j <= y + size / 2; j++) {
      th = x_at_point(i);
      tc = y_at_point(j);
      eff = 1 - tc / th;
      eff_r = map(eff, 0, 1, 0, 255);
      fill(eff_r, 255 - eff_r, 255 - eff_r); //, 1 - eff_r, 255);
      if (check[int(i)][int(j)] == 0) {
        circle(int(i), int(j), 1);
        check[int(i)][int(j)] = 1;
      }
    }
  }
}
function i(x, y) {
  return (x + y * width) * 4;
}

function mousePressed() {
  if (
    x_at_point(mouseX) > 0 &&
    y_at_point(mouseY) >= 0 &&
    mouseX < width &&
    mouseX > 0 &&
    mouseY < height &&
    mouseY > 0
  ) {
    fill_sqr(mouseX, mouseY);
    th = x_at_point(mouseX);
    tc = y_at_point(mouseY);
    eff = 1 - tc / th;
    th = th.toPrecision(4).toString();
    tc = tc.toPrecision(4).toString();
    eff = (eff * 100).toPrecision(4).toString();
    select("#th").html(th);
    select("#tc").html(tc);
    select("#eff").html(eff);
  }
}
function mouseReleased() {}

function mouseDragged() {
  if (
    x_at_point(mouseX) > 0 &&
    y_at_point(mouseY) >= 0 &&
    mouseX < width &&
    mouseX > 0 &&
    mouseY < height &&
    mouseY > 0
  ) {
    fill_sqr(mouseX, mouseY);
  }
}

function windowResized() {
  p = windowWidth;
  q = windowHeight;
  resizeCanvas(p * 0.6, q * 0.95);
}

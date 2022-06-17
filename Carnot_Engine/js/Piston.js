class Piston {
  constructor(x, y, h, cyl, pis) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.cyl = cyl;
    this.pis = pis;
  }

  show_piston() {
    ellipse(this.x, this.y, 10, 10);
    this.c = image(this.cyl, this.x, this.y);
  }
  in_piston(mx, my) {
    let xmax = this.x + this.cyl.width / 2;
    let xmin = this.x - this.cyl.width / 2;
    let ymax = this.y + this.cyl.height / 2;
    let ymin = this.y - this.cyl.height / 2;
    if (mx >= xmin && mx <= xmax && my >= ymin && my <= ymax ) {
      print("hi");
      return true;
    }
  }
}

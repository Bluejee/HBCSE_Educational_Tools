class Piston {
  constructor(x, y, h, cyl, pis) {
    this.x = x;
    this.y = y;
    this.h = h;
    // h is 1 means max height
    // 0 means least height
    // use h as a percentage of the piston cylinder
    this.default_y = y;
    this.cyl = cyl;
    this.pis = pis;
    this.stage = 0;
    this.state = 0;
    // state
    // 0 - No Change Needed.
    // 1 - Isothermal Expansion.
    // 2 - Adiabatic Expansion.
    // 3 - Isothermal Compression.
    // 4 = Adiabatic Compression.
  }

  show_piston() {
    this.p = image(
      this.pis,
      this.x,
      this.y + 0.15 * this.cyl.height - this.h * 0.4 * this.cyl.height
    );
    this.c = image(this.cyl, this.x, this.y);
    // ellipse(this.x, this.y, 10, 10);
  }
  in_piston(mx, my) {
    let xmax = this.x + this.cyl.width / 2;
    let xmin = this.x - this.cyl.width / 2;
    let ymax = this.y + this.cyl.height / 2;
    let ymin = this.y - this.cyl.height / 2;
    if (mx >= xmin && mx <= xmax && my >= ymin && my <= ymax) {
      //   print("hi");
      return true;
    }
  }
  check_change_stage() {
    if (this.stage == 0 && this.x < width / 3 && this.y == this.default_y) {
      print("Isothermal Expansion!");
      graph_img = cc_1;
      this.state = 1;
      // this.h = 0.6;
      document.documentElement.style.setProperty("--i3", 1);
      this.stage = 1;
    }

    if (
      this.stage == 1 &&
      this.x > width / 3 &&
      this.x < (2 * width) / 3 &&
      this.y == this.default_y
    ) {
      print("Adiabatic Expansion!");
      graph_img = cc_2;
      this.state = 2;
      // this.h = 1;
      document.documentElement.style.setProperty("--i4", 1);
      this.stage = 2;
    }
    if (
      this.stage == 2 &&
      this.x > (2 * width) / 3 &&
      this.y == this.default_y
    ) {
      print("Isothermal Compression!");
      graph_img = cc_3;
      this.state = 3;
      // this.h = 0.4;
      document.documentElement.style.setProperty("--i5", 1);
      this.stage = 3;
    }
    if (
      this.stage == 3 &&
      this.x > width / 3 &&
      this.x < (2 * width) / 3 &&
      this.y == this.default_y
    ) {
      print("Adiabatic Compression!");
      graph_img = cc_4;
      this.state = 4;
      // this.h = 0;
      document.documentElement.style.setProperty("--procede", 1);
      this.stage = 0;
    }
  }

  change_h(dh) {
    if (this.state == 1) {
      if (this.h < 0.6) {
        this.h = this.h + dh;
      }
    } else if (this.state == 2) {
      if (this.h < 1) {
        this.h = this.h + dh;
      }
    } else if (this.state == 3) {
      if (this.h > 0.4) {
        this.h = this.h - dh;
      }
    } else if (this.state == 4) {
      if (this.h > 0) {
        this.h = this.h - dh;
      }
    } else {
      // print("No Change Apparently");
      return;
    }
  }
}

let cw = 800;
let cy = 800;
let div = cw / 100;
let x = 0;
function setup() {
  createCanvas(cw, cy);

}

function draw() {
  background(0);

}
class stripe {
    constructor(iw, ixp, ih, iyp, id, it) {
    this.w = iw; // single bar width
    this.xpos = ixp; // rect xposition
    this.h = ih; // rect height
    this.ypos = iyp; // rect yposition
    this.d = id; // single bar distance
    this.t = it; // number of bars
    }
}
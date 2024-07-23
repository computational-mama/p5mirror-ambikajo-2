let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
  background(233, 219, 191);
}

function draw() {

  line(x, y, x + 10, y +5);
  stroke(x)
  // fill(x, 40, 60)
  if (x >= 400) {
    x = 0
    y = 0
  } else {
    x = x + 10;
    y = y + 5;
  }
}
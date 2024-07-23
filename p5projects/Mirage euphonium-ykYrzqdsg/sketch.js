function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(220);
  push();
  translate(width / 2, height / 2);
  for (a = 0; a < 28; a++) {
    rotate(PI/9);
    line(0, 0, 100, 100);
    circle(100, 100, 40);
  }
  pop();
}
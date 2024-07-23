let k = 1;
let n = 3;
let d = 1;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  for (let i = 0; i <= 400; i += 1) {
      translate(i - 90,0);
      push();
      flower(50);
      pop();
  }
}

function flower(scl) {
  // scale(scl);
  push();
  rotate(30);
  beginShape();
  for (a = 0; a < 180 * d; a += 12) {
    k = n / d;
    r = cos(k * a);
    x = r * cos(a) * scl;
    y = r * sin(a) * scl;
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();

  push();
  rotate(-30);
  beginShape();
  for (a = 0; a < 180 * d; a += 12) {
    k = n / d;
    r = cos(k * a);
    x = r * cos(a) * scl;
    y = r * sin(a) * scl;
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}

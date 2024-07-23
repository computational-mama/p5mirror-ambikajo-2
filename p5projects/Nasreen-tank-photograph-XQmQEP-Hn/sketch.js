let y = 0;
let x = 0;
let pg;
function setup() {
  createCanvas(800, 600);
}
function draw() {
  background(220);
  fill(50);

  push()
  for (i = 0; i < 9; i++) {
    tank(0, 30, 30, 30, 00, 00);
    translate(120, 0);
  }
  pop()
  if (y < 270) {
    y += 1;
    x += 0.1;
  }
  

}

function tank(a, b, c, d, e, f) {
  beginShape();
  vertex(a, height);
  vertex(b, height);
  vertex(c, height / 2);
  vertex(d + x, height / 2 - y);
  vertex(e - x, height / 2 - y);
  vertex(f, height / 2);
  endShape(CLOSE);
}

let a = 0
let m = 0

function setup() {
  createCanvas(400, 400);
  strokeCap(ROUND)
}

function draw() {
  background(255, 100, 130);
  stroke(255, 100)
  translate(width / 2, height / 2)
  for (a = 0; a < TWO_PI * 10; a += 0.05) {
    r = cos(4 / 9 * a)
    v = createVector(cos(a), sin(a ))
    v.setMag(150 * r)
    line(0, 0, v.x, v.y)
  }
  m += 0.001
}
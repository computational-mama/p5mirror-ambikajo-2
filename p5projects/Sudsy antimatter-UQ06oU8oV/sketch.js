function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill()
  makeCircle(200, 200, 250)

}

function makeCircle(x, y, d) {
  circle(x, y, d)
  
  if (d > 2) {
    makeCircle(x+d/3, y, d / 2)
    makeCircle(x-d/3, y, d / 2)
    // makeCircle(x, y-d/3, d / 2)
  }

}
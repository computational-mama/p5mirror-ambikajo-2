function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  // circle(100, 100, 20)
  // noStroke()
  noFill()
  // fill(255, 100)
  for (i = 0; i < 10; i++) {
    x = sin(frameCount / 100) * 100
    stroke(255, 10 * i + x)
    circle(50 * i, 200, x + i * 3)
    circle(50,20,i*x/5)

  }
}
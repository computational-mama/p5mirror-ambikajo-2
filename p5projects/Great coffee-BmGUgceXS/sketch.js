function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(220);
  for (i = 0; i < width; i++) {
    let m = map(i, 0, width, 0, 10);
    console.log(m)
    // noStroke()
    // fill(m*50);
    circle(i*50, 100, 40);
  }
}
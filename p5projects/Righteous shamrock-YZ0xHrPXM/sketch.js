// let a = 0
let vid

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  vid = createCapture(VIDEO)
  vid.hide()
}

function draw() {
  background(220);

  failing(10, 10)
  failing(10, 100)
}

function failing(r, d) {
  rect(r, d, 10, 10);
  ellipse(r, d, 100)
}
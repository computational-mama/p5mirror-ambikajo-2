let SGB_red;
let SGB_blue;
let SGB_grey;

function setup() {
  createCanvas(400, 400,SVG);
  rectMode(CENTER)
  noLoop()
}

function draw() {
  background(220);
  noFill()
  stroke(color('#3E6CDA'))
  strokeWeight(1)
  translate(width / 2, height / 2)

  push()
  for (i = 0; i < 3; i++) {
    rotate(PI / 18 * random(1))
    rect(0, 0, 80)
  }
  pop()
  
}
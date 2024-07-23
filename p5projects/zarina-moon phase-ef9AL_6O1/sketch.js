let x = 100

function setup() {
  createCanvas(400, 400);
  frameRate(3)
  noLoop()
}

function draw() {
  background(238, 228, 210);
 // fill(0);
 //  noStroke();
  translate(width / 2, height / 2)
  fill(0)
  rect(-180,-150,360,300)

  for (a = 0; a < 28; a++) {
    rotate(PI / 28)
    stroke(255)
    strokeWeight(2)
    line(0, 0, 130, 0);
    cir()
    rotate(PI / 28)
  }
  fill(2)
}

function cir() {
  fill(255)
  noStroke()
  circle(140, 0, 28)
  if (x >= 140) {
    x--
  } else {
    x = 160
  }
  
  fill(238, 228, 210)
  noStroke()
  circle(x, 0, 28)
}
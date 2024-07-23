function setup() {
  createCanvas(400, 400);
 background(220)
  frameRate(3)
  angleMode(DEGREES)
}

function draw() {

  rotate(frameCount)
  line(0,0,300,0)
}
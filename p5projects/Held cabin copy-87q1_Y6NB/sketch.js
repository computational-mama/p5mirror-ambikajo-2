function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  fill(255,0,190)
  // rotate(rotationX)
  circle(width/2,height*0.25,rotationX)
  // circle(width/2,height/2,accelerationY)
  // circle(width/2,height*0.75,accelerationZ)
}
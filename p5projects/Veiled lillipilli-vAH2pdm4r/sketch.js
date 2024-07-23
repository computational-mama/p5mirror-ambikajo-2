function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  frameRate(5);
  background(180,214,0);
}

function draw() {
  fill(255,200,200)
 line(mouseX,mouseY,200,20)
  fill(0,150,255)
 line(mouseX+40,mouseY+40,200,20)
}
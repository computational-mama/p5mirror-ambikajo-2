function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(128,50,128);
  circle(200,200,100)
  // circle(mouseX,mouseY,100)
  line(100,100,200,200)
  rect(20,200,10,50)
  line(100,50,200,50)
  line(mouseX,mouseY, mouseX+200,mouseY)
}
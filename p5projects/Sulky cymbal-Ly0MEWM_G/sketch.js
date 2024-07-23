y = 0

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}

function draw() {
  background(0, 70, 0, 0.05);
  noStroke()
  fill(frameCount % 360, 70, 100)
  translate(width / 2, height/2)
  r = cos(frameCount * 0.05) * cos(1 / 7 * frameCount * 0.05)
  x=r*cos(frameCount*0.01)*150
  y = r*sin(frameCount * 0.01) * 150;
  circle(x, y, 30)
  circle(-x, y, 30)
  circle(x, - y, 30)
  circle(-x,  - y, 30)
  
  circle(-x-200,  - y, 30)
  circle(x+200,   y, 30)
  circle(x,   y+200, 30)
  circle(x,   -y-200, 30)
  // circle(-x,  - y-200, 30)

  circle(-x-200,   y+200, 30)
  circle(-x-200,   -y-200, 30)
  
  circle(x+200,   -y, 30)
  circle(x+200,   y+200, 30)
  
  circle(x+200,   y-200, 30)
  circle(x+200,   y+200, 30)
  
   circle(-x,   y+200, 30)
   circle(-x,   -y-200, 30)
  

   circle(-x-200,   y, 30)
   circle(x-200,   -y-200, 30)
}
function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  // background(20,40);
}

function draw() {
    background(0, 0,0,0.05);
  fill(frameCount%360,75,100)
  noStroke()
  x = mouseX;
  y = mouseY;
  px=pmouseX;
  py = pmouseY;
  // line(x,y,px,py)
  // line(width-x,y,width-px,py)
  // line(x,height-y,px,height-py)
  // line(width-x,height-y,width-px,height-py)
  circle(x,y,20)
  // circle(width-x,y,20)
  // circle(x,height-y,20)
  circle(width-x,height-y,20)
  
}
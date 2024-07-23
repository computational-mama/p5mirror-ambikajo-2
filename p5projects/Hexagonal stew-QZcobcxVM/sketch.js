let yOffset = 0;
function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES)
  textSize(45)
  
  
}

function draw() {
  background(220);
  
  for (x = 0; x < width; x+=10) {
    // y = map(sin(x), -1, 1, 0, height);
    y = map(sin(x+yOffset),-1,1,0,height)
    // circle(x, y, 20);
    text("😅",x,y)
    
    yOffset+=0.003
  }
  
}
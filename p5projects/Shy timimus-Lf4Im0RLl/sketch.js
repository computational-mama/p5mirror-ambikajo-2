function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  stroke(255,0,0);
  fill(0,0,255)
  ellipse(mouseX,mouseY,20);  
  ellipse(mouseX+100,mouseY+10,10);   
  ellipse(mouseX+100,mouseY,10);
  
  
}
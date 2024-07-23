function setup() {
  createCanvas(400, 400);
  frameRate(10)
  background(255);
}

function draw() {
  // line(mouseX,mouseY,350,100)
  
  //here I'm drawing a line which moves with X
  line(100,50,200,50)// (x1,y1,x2,y2)
  line(mouseX,mouseY,mouseX+100,mouseY) // 
  
  //line(mouseX,mouseY+100,200+mouseX,mouseY+100)
  // ellipse(mouseX,mouseY,30)
  
  
}


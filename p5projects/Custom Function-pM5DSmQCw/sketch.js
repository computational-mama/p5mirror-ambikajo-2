function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  textSize(28)
}

function draw() {
  background(220);
 
    house(100,200,"hello")
    house(200,200,"vai")
  
}

function house(x,y,t){
  beginShape()
  vertex(x, y);
  vertex(x + 25, y + 25);
  vertex(x + 25, y + 75);
  vertex(x - 25, y + 75);
  vertex(x - 25, y + 25);
  endShape(CLOSE)
  circle(x+20,y,10)
  text(t,x,y)
}
let x= 0
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  
  push()
  translate(200,200)
  rotate(x)
  rect(0,0,100)
  pop()
  
  textSize(50)
  text("wow",100,100)
  rect(100,100,40)
  x++ 
}
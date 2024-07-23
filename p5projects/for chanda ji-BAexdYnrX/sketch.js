let x = 0 

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
    background(220);
  frameRate(4)
}

function draw() {
  translate(width/2,height/2)
  rotate(x)
  circle(100,100,30)
  line(0,0,100,100)
  x = x+12
}
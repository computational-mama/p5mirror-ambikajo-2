function setup() {
  createCanvas(800, 600);
   background(218,210,197);
  frameRate(60)
}

function draw() {

  stroke(100)
  strokeWeight(0.1)
  line(600,300,mouseX,mouseY)
  
  noFill()
  quad(200,100,600,100,600,500,200,500)
  
  noStroke()
  fill(218,210,197)
  rect(0,0,200,height)
  rect(600,0,200,height)
}
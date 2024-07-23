function setup() {
  createCanvas(400, 400);
  // noLoop()
  
  background(220);
  frameRate(9)
}

function draw() {
  noStroke()
  for(i=0;i<10;i++){
  fill(255,random(20,200))
  let G = random(-100,200)
    circle(random(width),mouseY+G,random(5,15))
    // rect(0,mouseY,width,mouseY-height)
  }
}

function mousePressed(){
  redraw()
}
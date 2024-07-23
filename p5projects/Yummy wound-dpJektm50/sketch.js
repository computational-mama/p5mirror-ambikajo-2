
let angle = 0;
function setup() {
  createCanvas(600, 400);
  // angleMode(DEGREES)
  // noLoop()
  // colorMode(HSB)
  background(220,10);
}

function draw() {
   offY = 0
  translate(0,height/2)
  fill(sin(frameCount)*100,100,100)
  for(x=0;x<width;x+=0.1){
    y = sin(angle + offY)*100
   // console.log(y)
    noStroke()
    circle(x*20,y,10)
    offY+=0.1
  }
  angle += 0.04
}
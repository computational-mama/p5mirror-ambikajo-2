let a = 0
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  colorMode(HSB)
}

function draw() {
  
  // background(220,10);
  noStroke()
  h = map(sin(frameCount),-1,1,0,360)
  fill(h,100,100)
  translate(width/2,height/2)
  rotate(frameCount*2)
  circle(a/10,0,10)
  a--
}
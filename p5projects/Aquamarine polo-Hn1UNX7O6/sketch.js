let m = 0;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  
}

function draw() {
  background(220,10,200);
  // noStroke()
  rotateY(frameCount*0.01)
  translate(0,frameCount*0.01,0)
  sphere(50)
  
}
let x, y, px, py;

function setup() {
  createCanvas(400, 400);
  
  
  
  colorMode(HSB);
}

function draw() {
  background(0, 0,0,0.075);
  stroke(frameCount %360, 75, 100);
  
  strokeWeight(3);
  
  x = mouseX;
  y = mouseY;
  px = pmouseX;
  py = pmouseY;

  line(x, y, px, py);
  line(width - x, y, width - px, py);
  line(x, height - y,  px, height -py);
  line(width - x, height - y, width - px, height -py);
  
}
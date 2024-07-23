let angle = 0;

function setup() {
  createCanvas(600, 400);
  // frameRate(8)
  textSize(32)
}

function draw() {
  background(220);
  noFill()
  stroke(100,200,29)
  // translate(width / 2, height / 2)
  let offsetY = 0;
  beginShape(TRIANGLES)
  for (x = 0; x < width; x++) {
    a = angle + offsetY;
    y = map(sin(a), -1, 1, 0, height);
   
    vertex(x,y)
    vertex(x+100,y)
  
    offsetY += 0.02;
  }
    angle +=0.008;
  endShape()
}
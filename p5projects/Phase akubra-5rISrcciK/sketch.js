function setup() {
  createCanvas(400, 400,WEBGL);
}

function draw() {
  background(220);
  rotateX(frameCount/100)
  rotateY(frameCount/100)
  box(50)
}
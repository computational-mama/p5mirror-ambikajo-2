function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  rotate(PI +frameCount/10);
  line(120,20,400,20)
  ellipse(100,100,30,30)
  rect(130,85,30,30)
}
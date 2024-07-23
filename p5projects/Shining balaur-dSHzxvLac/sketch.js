function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(220);
  ambientLight(200)
  specularMaterial(240, 220, 185)
  orbitControl()
  // noFill()
  noStroke()
  push()
  translate(0, 0, 100)
  pointLight(10, 10, 10, 50, -100, 0)
  box(150, 250, 500)
  pop()
  push()
  strokeWeight(0.5)
  rect(-33, -40, 70, 122)
  pop()
}
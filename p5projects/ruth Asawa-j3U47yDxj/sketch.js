let ruth;
let cnv

function preload() {
  ruth = loadModel("ruth.obj", true)
}

function setup() {
  createCanvas(600, 600, WEBGL);
  cnv = createGraphics(100, 100)
  // cnv.background(200)
  // frameRate(4)
}

function draw() {
  background(240);
  orbitControl()
  push()
  cnv.noStroke()
  cnv.fill(10, 200, 10, 100)
  cnv.circle(mouseX, mouseY, 40)
  // image(cnv,-200,0)
  pop()
  ambientLight(255)
  // normalMaterial()
  // noStroke()
  strokeWeight(0.4)
  stroke(100, 40, 10, 100)
  noFill()
  push()
  scale(2)
  // texture(cnv)

  rotateY(frameCount / 200 + sin(frameCount * 0.01))
  model(ruth)
  pop()
  push()
  scale(0.8)
  translate(0, -70, 0)
  rotateY(frameCount / 200 + sin(frameCount * 0.01))
  rotateX(PI)
  model(ruth)
  pop()

}
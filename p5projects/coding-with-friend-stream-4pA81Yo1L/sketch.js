let myfont

function preload() {
  myfont = loadFont("fonts/SpaceMono-Bold.ttf")
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES)
  // frameRate(8)
  textFont(myfont)
  textSize(50)
  textAlign(CENTER)
}

function draw() {
  let c = frameCount / 10
  background(250);
  noStroke()
  // ambientMaterial(255,80,100)
  // ambientLight(255)
  push()
  normalMaterial()
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      translate(-j, -i * 10, c)
      let s = 10 * sin(i)
      rotateX(i + s + c)
      rotateY(c)
      torus(80 * s, 8, 50)
    }
  }
  pop()
  push()
  fill(0)
  translate(0, 0, 10)
  text("CODING WITH FRIENDS", -50, -50, 100)
  pop()
}
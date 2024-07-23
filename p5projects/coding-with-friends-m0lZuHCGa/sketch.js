let myfont

function preload() {
  myfont = loadFont("fonts/SpaceMono-Bold.ttf")
}

function setup() {
  pixelDensity(4)
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES)
  // frameRate(8)
  textFont(myfont)
  textSize(40)
  textAlign(CENTER)
}

function draw() {
  let c = frameCount / 10
  background(0);
  noStroke()
  // ambientMaterial(255,80,100)
  // ambientLight(255)
  push()
  normalMaterial()
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      let s = -10 * tan(i)*cos(i)
      translate(j*2, -i * 10, c*s)
      
      rotateX(i + s + c)
      rotateY(c)
      cone(80 * s, -18, 50)
    }
  }
  pop()
  push()
  fill(255)
  translate(0, 0, 0)
  text("CODING WITH FRIENDS", -50, -50, 100)
  pop()
}
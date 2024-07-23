let myfont

function preload() {
  myfont = loadFont("fonts/SpaceMono-Bold.ttf")
}

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES)
  // frameRate(8)
  textFont(myfont)
  textSize(40)
  textAlign(CENTER)

}

function draw() {
  let c = frameCount / 3
  background(255)
  noStroke()
  translate(-200, -200, 0)
  // fill(255)
  // text("CODING WITH FRIENDS", 130, 100, 150, 400)
  push()
    translate(0,0,-100)
  fill(0)
  text("CODING WITH FRIENDS", 130, 100, 150, 400)
  pop()
  for (i = 0; i < width; i += 100) {
    for (j = 0; j < height; j += 100) {
      push()
      normalMaterial()
      // translate(i*50,0)
      c = sin(PI / 2 + c) * c
      rotateX(c)
      rect(i, j, 100, 100)
      pop()
    }
  }
}

// function form1(){

// }
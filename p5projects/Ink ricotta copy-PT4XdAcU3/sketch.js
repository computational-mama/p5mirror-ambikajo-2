let cam
let palim

function preload() {
  palim = loadImage("folded.jpg")
}

function setup() {
  createCanvas(600, 400, WEBGL);
  cam = createCamera()
  randomSeed(99)
}

function draw() {
  background(220);
  orbitControl()
  cam.lookAt(-250,60,0);
  let s =  80
    // rotateY(PI/2)  
  texture(palim)
  for (i = 0; i < 4; i++) {
    // rotateX(frameCount / 100)
  noStroke()
    translate(-150, 0, 0)
    box(120, 120, 120)
  }
}
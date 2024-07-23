let cam
let palim

function preload() {
  palim = loadImage("folded.jpg")
}

function setup() {
  createCanvas(600, 400, WEBGL);
  // cam = createCamera()
  randomSeed(99)
}

function draw() {
  background(220);
  orbitControl()
  // cam.lookAt(50,0,0);
  ambientLight(100)
  pointLight(250,250,250,0,0,80)
  noStroke()
  let s = cos(frameCount / 1000) * 80
    rotateY(PI/2)
    texture(palim)
  for (i = 0; i < 4; i++) {
    
    rotateY(frameCount / 100)
    translate(s + 10, 0, 0)
    box(s, 80, 80)
  }
}
let webcam
let x = -120;

function setup() {
  createCanvas(800, 400);
  webcam = createCapture(VIDEO)
  webcam.hide()
  background(220);
}

function draw() {
  copy(webcam,200,0,10,webcam.height,x,0,10,webcam.height)
  x++
}
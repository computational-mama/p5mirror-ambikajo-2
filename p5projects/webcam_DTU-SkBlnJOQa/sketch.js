let webcam;
let x =0
function setup() {
  createCanvas(400, 400);
  webcam = createCapture(VIDEO)
  webcam.hide()
  webcam.size(100,100)
  
}

function draw() {
  background(220);
}
let webcam
let x=0
function setup() {
  createCanvas(400, 800);
  webcam = createCapture(VIDEO)
  webcam.hide()
  // webcam.size(300,100)
  background(220);
}

function draw() {
  image(webcam,0,0)
  // copy(webcam,120,50,1,100,10,400,1,100)
  copy(webcam,200,50,1,100,x,400,1,100)
  x++
}
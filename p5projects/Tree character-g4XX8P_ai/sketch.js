let seems;

function setup() {
  createCanvas(400, 400);
  seems = createCapture(VIDEO)
  seems.hide()
}

function draw() {  
  background(220);
  
    image(seems,0,0,200,150)
}
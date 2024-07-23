let webcam;

function setup() {
  createCanvas(400, 400);
  webcam = createCapture(VIDEO)
  webcam.size(100,100)
  webcam.hide()
}

function draw() {
  background(220);
    getSamosa(50,50);
}

function getSamosa(a,b){
  circle(100+a,100+b,50);
  square(200+a,100+b,50);
  image(webcam,0+a,0+b);
  text("hello!",a,b)
  
}
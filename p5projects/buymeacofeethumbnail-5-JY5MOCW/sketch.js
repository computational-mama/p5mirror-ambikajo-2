function setup() {
  createCanvas(460,200);
  textAlign(CENTER)
  textFont('Space Mono');
  textSize(40)
  pixelDensity(4)
  noLoop()
}

function draw() {
  background('#bd5fff');
  ranCircle()
  fill(255)
  text("request a topic",width/2,30,10, 400)
}

function ranCircle(){
  for(i=0;i<25;i++){
    noStroke()
    fill(255,150)
    circle(random(0,width),random(0,height),random(13,80))
  }
}
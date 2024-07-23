function setup() {
  createCanvas(1280, 720);
  textAlign(CENTER)
}

function draw() {
  background(220,30);
  push()
  textSize(map(mouseX,0,width,15,400))
  fill(230,0,240)
  translate(width/2,height/2)
  rotate(frameCount/100)
  text("beatz by dre dre", 0,0)
  pop()
}
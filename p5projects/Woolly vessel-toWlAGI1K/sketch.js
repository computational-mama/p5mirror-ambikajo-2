function setup() {
  createCanvas(400, 400);
  rectMode(CORNERS)
}

function draw() {
  background(220);
  let c = map(mouseX,0,width,0,50)
  let cy = map(mouseY,0,height,0,50)
  noStroke()
  fill(255)
   // rect(10,10,100,100+mouseY)
  quad(100,100,200+c,100+cy,200,200,100,200)
  fill(100,190,250,180)
  quad(100,100,200+c*2,100+cy*2,200,200,100,200)
  
}
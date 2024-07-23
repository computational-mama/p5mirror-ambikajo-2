function setup() {
  createCanvas(600, 400);
  background(255);
  // frameRate(3)
  noStroke()
  
}

function draw() {

  r = random(100,200)
  fill(r, 0, 0)
  circle(mouseX,mouseY, r)

}
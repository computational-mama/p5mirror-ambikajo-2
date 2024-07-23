let r;

function setup() {
  createCanvas(400, 400);
  noLoop()
}

function draw() {
  background(200,140,100);
  for (i = 0; i < 4; i++) {
    house(100 * i, 100, 30)
  }
}

function house(x, y, diameter) {
  noStroke()
  fill(200)
  rect(x, y, 100, 100)
  triangle(x, y, x + 50, y - 50, x + 100, y)
  fill(0)
  for (a = 0; a < 4; a++) {
    r = 0 
    rect(x + 10 * a, y+r, 8, 100)
  }
}

function mousePressed(){
  r = random(10,100)
}
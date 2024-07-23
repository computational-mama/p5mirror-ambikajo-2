let bubble = [];

function setup() {
  createCanvas(400, 400);
  for (i = 0; i < 30; i++) {
    x = i * 30
    bubble[i] = new Bubble(x, 200, 40)
  }

}

function draw() {
  background(220);
  for (i = 0; i < bubble.length; i++) {
    bubble[i].move()
    bubble[i].show()
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r
  }
  move() {
    this.x = this.x+random(-1,1)
    this.y = this.y+random(-1,1)
    
  }
  show() {
    fill(255)
    ellipse(this.x, this.y, this.r)
  }
}
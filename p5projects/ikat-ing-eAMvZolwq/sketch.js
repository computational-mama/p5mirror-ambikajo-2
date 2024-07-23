let r;

function setup() {
  createCanvas(1600, 400);
  frameRate(8)
}

function draw() {
  background(200, 0, 90);
  ikatRow(0,0)
  ikatRow(0,150)
  ikatRow(0,300)
}

function ikatRow(a,b) {
  for (i = 0; i < width; i++) {
    if (i % 2) {
      stroke(255, 190, 40)
      // r = random(-2,2)
      let y = i % 5
      line(i+a, b+y * 10, i+a, b+y * 10 + 50)
    }
  }
}


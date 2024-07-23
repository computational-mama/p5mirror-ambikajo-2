let m = 0

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(255);
  noStroke()
  fill(255, 10, 150, 100)
  translate(width / 2, height / 2)
  for (a = 0; a < TWO_PI; a += 0.3) {
    r = sin(a + m) * 100
    q = cos(a + m) * 100
    // if (frameCount < 200) {
    //   ellipse(r, q, (sin(a) * 50),sin(a)*50)
    // } else if (frameCount < 400) {
    //   fill(120, 60, 250, 100)
    //   rect(r, q, 30, (sin(a) * 100))
    // } else {
      fill(220, sin(a) * 100, sin(m)*100,100)
      rect(r, q, 30, (sin(a) * 100))
    // }
  }
  m += 0.015
}
function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  noStroke();
  limit = 40
  // translate(width / 2, height / 2);
  for (i = 0; i < limit; i++) {
    for (j = 0; j < limit; j++) {
      if (j % 2 == 0) {
        if (i % 2 == 0) {
        	fill(0);
        }
        else {
          fill(255);
        }
      }
      else {
        if (i % 2 == 0) {
        	fill(255);
        }
        else {
          fill(0);
        }
      }
      r = width / 4;
      x = i * limit/2;
      y = j * limit/2;
      d = dist(x, y, width / 2, height / 2);
      // console.log(d);
      if (d < r || d > r*2) {
        circle(x, y, 10);
      }
    }
  }
  noLoop();
}

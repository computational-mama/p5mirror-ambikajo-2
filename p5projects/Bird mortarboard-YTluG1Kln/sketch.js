function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(220);
  for (i = 0; i < height; i+=100) {
    for (a = 0; a < width; a++) {
      if (a % 2 == 0) {
        fill(150)
        rect(a * 10, i, 10, 100)
      } else if (a % 2 == 1) {
        fill(250)
        rect(a * 10, 50+i, 10, 100)
      }
    }
  }
}
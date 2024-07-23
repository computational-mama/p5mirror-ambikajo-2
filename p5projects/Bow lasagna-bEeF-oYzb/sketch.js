function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (i = 0; i < width; i+=100) {
    for (j = 0; j < width; j+=150) {
    house(i,j+50);
    }
  }
}

function house(a,b) {
  triangle(a, b, a + 50, b-50, a + 100, b);
  fill(255,100)
  square(a, b, 100);
  fill(255,0,200,100)
  circle(a, b+50, 40);
}

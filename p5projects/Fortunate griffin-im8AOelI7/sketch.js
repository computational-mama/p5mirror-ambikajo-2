let x = 0;
let cnv;

function setup() {
  createCanvas(400, 650);

}

function draw() {
  background(20);

  noStroke();
  for (i = 20; i <= height - 20; i += 10) {

    for (j = 20; j <= width - 20; j += 10) {
      s = 6 * (sin(i+j+x));

      circle(j, i, s);
    }
  }
  x += 0.02;

}
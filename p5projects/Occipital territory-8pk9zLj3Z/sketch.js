let cnv;

function setup() {
  createCanvas(400, 400);
  cnv = createGraphics(400, 400);
  noLoop();
}

function draw() {
  background(220);
  cnv.background(255);
  // circle(100,100,50)
  cnv.noStroke();
  for (x = 0; x < cnv.width; x += 2) {
    cnv.fill(random(225), random(250), 190);
    cnv.circle(random(width), random(height), 50);
  }

  cnv.filter(BLUR, 9);
  image(cnv, 0, 0);
}
let pg;

function setup() {
  createCanvas(636, 425);
  my = createGraphics(100, 100);
  my.rectMode(CENTER)
  noLoop()
  // frameRate(8)
}

function draw() {
  background(10);
  my.background(255)

  my.line(width - 10, 0, 0, height)
  rotate(PI / 4)
  for (i = 8; i >= 0; i--) {
    r = round(random(60,90))+i
    my.fill(r)
    my.rect(my.width / 2, my.height / 2, 20 * i, 20 * i)
  }
  my.stroke(10, 50)
  my.line(0, 0, my.width, my.height)
  my.line(my.width, 0, 0, my.height)

  translate(0, -600)
  for (j = 0; j < 11; j++) {
    for (r = 0; r < 11; r++) {
      image(my, 100 * j, 100 * r)
    }
  }
}
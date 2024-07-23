function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noLoop()
}

function draw() {
  background("#02217d");
  noStroke()
  translate(width / 2, height / 2);
  push()
  fill('orange')
  wheel(8,170, 60,140)
  pop()
  
  push()
  rotate(random(30))
  fill(0,0,255,120)
  wheel(8,170,40, 70)
  pop()
  
}

function wheel(slice,outerR, innerR1,innerR2){

  for (j = 0; j < 360; j += slice) {
  let innerRad = random(innerR1,innerR2)
    x = outerR * cos(j);
    y = outerR * sin(j);
    x2 = outerR * cos(j + (slice-2));
    y2 = outerR * sin(j + (slice-2));
    x3 = innerRad * cos(j);
    y3 = innerRad * sin(j);
    x4 = innerRad * cos(j + (slice-2));
    y4 = innerRad * sin(j + (slice-2));
    beginShape()
    vertex(x, y)
    vertex(x2, y2);
    vertex(x4, y4)
    vertex(x3, y3);
    endShape()
  }
}
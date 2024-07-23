function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  background(220);
  noStroke();
  translate(width / 2, height / 2);
  let slice = 12;
  let outerR = 185;

  for (j = 0; j < 360; j += slice) {
    x = outerR * cos(j);
    y = outerR * sin(j);
    
    push();
    fill("orange");
    rotate(x);
    rect(100, 0, 40, j/20);
    pop();
    
    push();
    fill("blue");
    rotate(y);
    rect(100, 0, 40, j/20);
    pop();

    x2 = outerR * cos(j + (slice - 2));
    y2 = outerR * sin(j + (slice - 2));
    
    push()
    rotate(x2);
    fill("blue");
    rect(30, 0, 30,j/50);
    pop()
    
    push()
    rotate(y);
    fill("orange");
    rect(30, 0, 30, j/50);
    pop()
    // x3 = innerRad * cos(j);
    // y3 = innerRad * sin(j);
    // x4 = innerRad * cos(j + (slice-2));
    // y4 = innerRad * sin(j + (slice-2));
    // beginShape()
    // vertex(x, y)
    // vertex(x2, y2);
    // vertex(x4, y4)
    // vertex(x3, y3);
    // endShape()
  }
}

function wheel(slice, outerR, innerR1, innerR2) {}

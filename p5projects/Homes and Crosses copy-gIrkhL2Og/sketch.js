let y = 100;
let x = 80;
let angle = 0;

let a = 100;
let b = 80;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  background(39, 38, 35);
  angleMode(DEGREES);
  frameRate(2);
}

function draw() {

  stroke(233, 220, 191);

  line(y, 0, y, 400);
  line(0, x, 400, x);
  x = x + 80;
  y = y + 100;

  for (let a = 80; a < 400; a += 80) {
    // line(x1,y1,x2,y2)
    line(a,0,a,height)
    line(0,a,width.a)
    rect(100, a, 15, 3);
    rect(100, a, 2, 20);
    rect(200, a, 15, 3);
    rect(200, a, 2, 20);
    rect(300, a, 15, 3);
    rect(300, a, 2, 20);
  }

  translate(100, 80);
  rotate(angle);
  rect(10, 30, 30, 5);

  angle = angle + 72;




}
let d;
let div=10;
let sym = 360/div
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220, 10);
  stroke(20, 19, 200)
  d = map(mouseX, 0, width, 0, 90)
  // push()
  // translate(width/2,height/2)
  // branch(100)
  // pop()
  for (i = 0; i < 360; i += sym) {

    push()
    translate(width / 2, height / 2)
    rotate(i)
    branch(60)
    pop()
  }
}


function branch(br) {

  line(0, 0, 0, -br)
  translate(0, -br)
  if (br > 12) {
    push()
    rotate(d)
    branch(br * 0.7)
    pop()
    push()
    rotate(-d)
    branch(br * 0.7)
    pop()
  }
}
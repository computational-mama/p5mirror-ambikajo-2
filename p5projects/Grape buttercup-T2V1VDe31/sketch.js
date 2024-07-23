let d;

  let div = 6;
  let sym = 360 / div;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  colorMode(HSB)
}

function draw() {
  background(0, 100, 0, 0.05);
  stroke(frameCount % 360, 90, 100)
  // d = 60;
  div2 = sin(frameCount)
  // d = map(mouseX, 0, width, 0, 90)
  d = map(div2, -1, 1, 0, 90)
  for (i = 0; i < 360; i+=sym) {
    push()
    translate(width / 2, height / 2)
    rotate(i+frameCount*0.1)
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
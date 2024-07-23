let div = 6;
let sym = 360/div;
let vid;

function setup() {
  createCanvas(400, 400,WEBGL);
  vid = createCapture(VIDEO)
  vid.hide()
  angleMode(DEGREES)
}

function draw() {
  background(220);
  noStroke()
  texture(vid)
  for (i = 0; i < 360; i += sym) {

    push()
    rotate(i)
    texture(vid)
    triangle(0,0,80,150,-80,150)
    
    pop()
  }
}
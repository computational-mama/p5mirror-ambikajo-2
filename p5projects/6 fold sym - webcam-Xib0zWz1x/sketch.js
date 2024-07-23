//livestreamed on 20 Jan 2021
//how to use 6 fold symmetry for a webcam kaleidoscope

let vid;
let font;

function preload(){
  font = loadFont("JetBrainsMono-Medium.ttf")
}
function setup() {
  createCanvas(1920, 1080, WEBGL);
  vid = createCapture(VIDEO)
  vid.hide()
  // vid.side()
  angleMode(DEGREES)
  textFont(font)
  textSize(70)
}

function draw() {
  background(0);
  // noStroke()
  // translate(width / 2, height / 2)
  for (angle = 0; angle < 360; angle += 60) {
    textureMode(NORMAL);
    let r = 300
    x = r * cos(angle)
    y = r * sin(angle)
    x2 = r * cos(60 + angle)
    y2 = r * sin(60 + angle)
    texture(vid)
    beginShape(TRIANGLES);
    vertex(0, 0, 0, 0);
    vertex(x, y, 0, 1);
    vertex(x2, y2, 1, 1);
    endShape()
    push()
    noStroke()
    fill(angle/2,angle)
    text("How to succumb to basic generative tropes",350,-angle/3-200,250,700)
    pop()
    push()
    fill(255)
    text("How to succumb to basic generative tropes",350,-300,250,700)
    pop()
  }
}
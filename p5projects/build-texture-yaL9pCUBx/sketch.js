let vid;

function setup() {
  // put setup code here
  createCanvas(600, 400, WEBGL)
  // perspective(PI / 3.0, width / height, 0.1, 500);

  vid = createVideo("heb_3.mp4")
  vid.size(100, 100)
  vid.volume(0)
  vid.loop()
  vid.hide()
}

function draw() {
  // put drawing code here
  background(220)
  noStroke()
  orbitControl()
rotateY(PI/2)
// rotate(PI/3)
// rotateZ(PI/10)

translate(10, 10, 20);
  for (i = 0; i < 5; i++) {
    if (i == 0) {
      texture(vid)
    } else {
      fill(100)
    }
    box(40,100, 70)
  }
  // text("Use mouse to move around",10,height-40)
}

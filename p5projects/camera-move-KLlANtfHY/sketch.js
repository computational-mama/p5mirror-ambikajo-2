function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
}

function draw() {
  background(220);
  orbitControl()
 camera(100, -120, cos(frameCount/100)*70+200, 0, 0, 0, 0, 1, 0);
  noStroke()
  normalMaterial()
  s = map(sin(frameCount / 100), -1, 1, 10, 80)

  for (i = 0; i < 5; i++) {
  translate( s, 0,0)
    rotateY(s/100)
    box(100)
  }

}

function kid() {

  push()
  rotateX(PI)
  translate(0, 20, 0)
  cone(10, 30)
  pop()

  push()
  translate(0, -36, 0)
  sphere(6)
  pop()

  push()
  translate(-6, -40, 0)
  rotateX(PI)
  rotateZ(PI / 3)

  cone(8, 16)
  pop()

}
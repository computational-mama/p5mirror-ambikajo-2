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
  kid()
  translate(0, s / 2 - 10, 0)
  for (i = 0; i < 5; i++) {
    rotateY(PI / 4)
    box(80, s, 100)
  }
  translate(-100, s / 2 - 10, 30)
    for (i = 0; i < 5; i++) {
    rotateY(PI / 4)
    box(40, s/2, 50)
  }
  
  translate(100, s / 2 - 10, -130)
    for (i = 0; i < 5; i++) {
    rotateY(PI / 4)
    box(40, s/2, 50)
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
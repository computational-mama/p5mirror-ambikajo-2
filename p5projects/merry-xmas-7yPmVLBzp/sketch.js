function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(25);
  stroke(255, 0, 0)
  strokeWeight(0.3)
  fill(34, 139, 34)
  translate(0, -width / 2 + 80, 0)
  push()
  noFill()
  translate(0, -width / 2 + 170, 0)
  sphere(10)
  rotate(frameCount / 400)
  sphere(600)
  pop()

  for (i = 0; i < 40; i++) {
    rotateY(sin(frameCount / 500))

    translate(0, i, 0)
    box(10 * i, 8, 50)

    push()
    noStroke()
    fill(255, 0, 0)
    translate(100, i, 0)
    sphere(4 * sin(frameCount / 100))
    translate(-200, i, 0)
    fill(25, 230, 200)
    sphere(2 * sin(frameCount / 100))
    pop()
  }



}
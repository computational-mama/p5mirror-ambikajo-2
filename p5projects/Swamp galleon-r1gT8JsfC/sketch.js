let x = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width / 2, height / 2)
  for (angle = 0; angle < TWO_PI; angle += 0.03) {
    y = sin(angle) * 100
    
    line(0, 0,y,y)
    // vertex(x, y)
    // vertex(x+100, y+100)
    // endShape()
  }
  x++

}
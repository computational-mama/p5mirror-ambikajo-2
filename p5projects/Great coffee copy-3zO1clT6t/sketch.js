function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(220);
  m = map(mouseX, 0, width, 0, 10)
  console.log(m)

}
let x;
let y;
let angle = 0;

function setup() {
  createCanvas(1000, 400);
  // noLoop()
  textSize(40)
}

function draw() {
  background(220);
  let offsetY = 0;

  for (x = 0; x < width; x += 24) {
    a = angle + offsetY;
    // aN = sin(a)
    y = map(sin(a), -1, 1, 0, height)
    // ellipse(x, y, 40, 40)
    text("👩‍🔬",x,y)
    offsetY += 0.2;
  }
  angle += 0.008
  // console.log(sin(angle))

}
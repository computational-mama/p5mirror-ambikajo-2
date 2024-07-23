
let m = 0
let n = 1
let d = 4
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill()
  translate(width / 2, height / 2)
beginShape()
  for (a = 0; a < TWO_PI*d; a += 0.03) {
    k  = n/d
    r = cos(k*a)
    x = r * cos(a) * 100
    y = r * sin(a) * 100
    vertex(x, y)
  }
endShape(CLOSE)  

  n += 0.02
}
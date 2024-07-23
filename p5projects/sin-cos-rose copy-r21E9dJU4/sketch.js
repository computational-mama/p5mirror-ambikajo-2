
let m = 0
let n = 1
let d = 7
function setup() {
  createCanvas(innerWidth, innerHeight);
  // colorMode(HSB)
}

function draw() {
  background(255);
  // noFill()
  noStroke()
  translate(width / 2, height / 2)
beginShape()
  for (a = 0; a < TWO_PI; a += 0.03) {
    k  = n/d
    r = cos(k*a)
    x = r * cos(a+m) * 150
    // console.log(x)
    y = r * sin(a) * 150
    // console.log(y)
   fill(x,y,70)
    ellipse(x,y,50,50)
  }
endShape(CLOSE)  

  m += 0.02
  n+=0.03
  // d+=0.03
}
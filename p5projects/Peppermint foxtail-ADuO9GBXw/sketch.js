let an = 0

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  // frameRate(2)
  rectMode(CENTER)
}

function draw() {

  background(220, 100);
  // 


  for (x = 0; x < width; x += 20) {
   noStroke()
    rad = map(sin(x),-1,1,10,height)
    col = map(cos(an)*sin(x+an),-1,1,0,255)
    fill(col,20,200)
    rect(x, 200, 16, col)
  }
    an++


}

function m(a, b) {
  // circle(a,b,5)
  // rect(a,b,10,10)
  text("👶👶", a, b)
}
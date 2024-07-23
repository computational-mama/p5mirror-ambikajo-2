let div = 8;
let sym = 360 / div;
let m = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  noFill()
  stroke(150)
  translate(width / 2, height / 2)
  for (i = 0; i < 360; i += sym) {
      x = 10 * cos(i);
      y = 10 * sin(i);
     tile(x,y,2)
    
  }

}

function tile(x,y,r){
   circle(x, y, r);
  if(r<180){
      push()
      rotate(22.5)
      tile(x*1.6 , y*1.6 , r*1.6)
      pop()
  }
}
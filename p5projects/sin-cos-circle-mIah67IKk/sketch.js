// refer the maths here https://www.mathsisfun.com/sine-cosine-tangent.html
//set a global variable "m" that animates the circular motion
let k = 4
let m = 0;

function setup() {
  createCanvas(400, 400);
  // colorMode(HSL)
}

function draw() {
  background(220);
  noStroke()
  translate(width/2,height/2)
  for(a=0;a<TWO_PI*10;a+=0.03){
    r = 100*cos(k*a)
    x = r*cos(a)
    y = r*sin(a)
    fill(x,y,m)
    ellipse(x,y,10,10)
  }
  m+=0.02;
  
}
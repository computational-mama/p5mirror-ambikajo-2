let x = 0;
let y = 0;
let rcos;
let rsin;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //counters
  line(x, y, x + 20, y)
  y = y + 1
  
  //for loop
//   for(y=0;y<height;y+=10){
//   line(x, y, x + 20, y)
    
//   }
  
//Zarina, Home is a Foreign Place, 1999 (https://hammer.ucla.edu/programs-events/2012/11/zarina)
//moon phases woodcut  
  push()
  translate(width/2,height/2)
  for (a=0;a<TWO_PI;a+=0.3){
    rcos = 130*cos(a)
    rsin = 130*sin(a)
    line(0,0, rcos, rsin)
    dif = 1.05
    rsin2 = 130*sin(a+dif)
    rcos2 = 130*cos(a+dif)
    ellipse(rcos2,rsin2,40)
  }
  pop()  
}
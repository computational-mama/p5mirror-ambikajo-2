let x=100
let y=100

function setup() {
  createCanvas(400, 400);
  background(61);
}

function draw() {
 // noStroke()
//   let xc = constrain(x, 0, width-1);
//   let yc = constrain(y, 0, height-1);
//   ellipse(xc,yc,15,15)
//   x = x+float(random(-5,5))
  
//   y = y+random(-5,5)
//   console.log(xc,yc)
  walk();
  show();
}

function walk(){
  let choice = floor(random(4))
  
  if (choice== 0){
    x+=5
  } else if(choice == 1){
     x-=5;
  } else if(choice ==2) {
    y+=5;
  } else {
    y-=5;
  }
  
  x = constrain(x, 0, width-1);
  y = constrain(y, 0, height-1);

}

function show(){
    stroke(255,162,192,50)
    line(x,y,x+20,y+20)

}
//recreating Zarina
//https://www.instagram.com/p/CKYveeUgcHD/

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES)
}

function draw() {
  background(50);
  let r = 200
  let thickness = 12
  // noStroke()
  translate(width/2,height/2)
  for(a=0;a<360;a+=6){
    let x = cos(a)*r
    let y = sin(a)*r
    // circle(x,y,10)
    
    if(a < 91){
      rect(0,y,x+8,thickness)
    } else if(a>=90 && a<180){
      rect(x,0,thickness,y+8)
    } else if(a>=180 && a<270){
      rect(0,y,x,thickness)
    } else {
      rect(x,0,thickness,y)
    }
  }
}
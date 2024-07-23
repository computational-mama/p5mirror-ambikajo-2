// variation of Moon Phases by Zarina

    let shift=0
let x=0; //origin
let y=0; //origin
let a=0; //repeater
let angle=50; //blackout shift
    
function setup() {
  createCanvas(400, 400);
  frameRate(3);
  // noLoop();
}


function draw() {


  
  // create background 
  background(238, 228, 210);
  fill(0);
  noStroke();
  rect(90,50,height-180,width-100);
  rect(50,90,height-100,width-180);

  // change anchor point
  translate (width/2, height/2)
  
  //set global stroke and fill to beige
  fill(238, 228, 210);
  stroke(238, 228, 210);
  

  // base animation
  rotate(frameCount*PI/14)
  line (x, y, x+100, y);
  rotate(PI/28);
  circle(x+100, y, 22);
  push();
    fill(0);
    noStroke();
    circle(x+100, y+shift, 22);
    if (shift>21) {
      shift = 0;
    } else {
      shift=shift+1.5;
    }
  pop();
  push();
    noFill();
    circle(x+100, y, 22);
  pop();
  rotate(PI/28);
  line (x, y, x+100, y);
  rotate(PI/14)
 

  

// cirlce strokes
  
// push();
//   noFill();
//   stroke(238, 228, 210);
//   for(let c=0;c<24;c++){
//     rotate(PI/24);    
//     circle(x+100, y, 26);
//     rotate(PI/24)  //   }
// pop();


}

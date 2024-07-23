var mona = {
  x : 100,
  y : 100
} 

let xoff = 1 ;
function setup() {
  createCanvas(400, 400);
  background(220);
    noiseSeed(99);
  stroke(0, 10);
  // frameRate (50)
}
function draw() {
  // {
  //   if ( mona.x>0 && mona.x<width) {
  //     fill (0) } else {
  //       fill (255);
  //     }
    if ( mona.y<300 && mona.y<height) {
      fill (0) } else {
        fill (255);
      }
//    {
//   xoff = xoff + .02;
//   let n = noise(xoff) * width;
//   rect (n, 40, 40, 320);
// }
  mona.x =random(0,width);
  mona.y = random(0,height);
  noSmooth(500);
  circle (mona.x, mona.y, 50, 50,)
    fill(80)
  circle (mona.x, mona.y, 40, 40, )
  fill(255)
  circle (mona.x, mona.y, 20, 20, )
 
  // mona.x = mona.x + 15
  // mona.y= mona.y + 15
  }


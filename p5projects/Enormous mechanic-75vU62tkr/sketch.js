let img;

function preload() {
  img = loadImage('1crop.png')
}

function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(10)
}

function draw() {
   let x = width-img.width;
  let y = 0;
  for (x = width; x > -200; x -= 80) {
    image(img, x, 0)
    filter(GRAY)
  }
 
    // image(img, x, 0)
    // filter(GRAY) 
  // x-=80
  // if(x < -200){
  //   x = width
  //   y=img.height
  // } else{
  //   x-=50
  // } 
}
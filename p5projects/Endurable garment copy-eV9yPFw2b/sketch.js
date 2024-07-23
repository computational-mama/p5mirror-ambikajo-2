let img;
let myfont;

function preload() {
    a = 'IMAGE.jpg'
    img = loadImage(a)
   myfont=loadFont("Baloo 2")
}

function setup() {
  createCanvas(600, 400);
 capture = createCapture(VIDEO);
  capture.hide();
  textSize(12)
  textFont(font)
}

function draw() {
  image(img, 0, 0, 600, 400)
  
  image(capture, 0, 300, 100,100);
  c = get(50,350)
  
  for (let x=10; x<width; x=x+50) {
    for (let y=10; y<height; y=y+50) {
      if (red(c)>90) {
   for (let m=0; m<width; m=m+100) {
for (let n=0; n<height; n=n+100) {
    image(capture, m, n, 100,100);
}
   }
      }
    }
  }
  image(capture, 0, 300, 100, 100);
  
    push();
  translate (600,10);
  rotate (PI/2);
  for (let i=0; i<width; i=i+20) {
   text("सभी का खून है शामिल यहां की मिटटी में, किसी के बाप का हिंदुस्तान थोड़ी है",0,i)}
  pop();
}
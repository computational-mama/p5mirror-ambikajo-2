let circleimg;
let imgs = [];

function preload() {
  
 for (i = 0; i < 3; i++) {
    imgs[i] = loadImage("img_"+i+".jpg"); 
  }
  circleimg = loadImage('circle.png')
}



function setup() {
  createCanvas(400, 400,WEBGL);
  // cnv = createGraphics(100,100)

}

function draw() {
  background(220);
  
 for (var i=0; i<imgs.length; i++) {
    image(imgs[i], i*50, 20); 
  }
  //   righteye.mask(circleimg)
  //   image(righteye,20,20)
  //   lefteye.mask(circleimg)
  //   image(lefteye,100,20)
  //   nose.mask(circleimg)
  //   image(nose,200,20)
  //  mouth.mask(circleimg)
  //  image(mouth,150,150)

}
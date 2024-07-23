let pixelator
let myFile;

function preload(){
  myFile=loadImage("paaps.png")
}
function setup(){
  createCanvas(400,400,WEBGL)
  textSize(40)
  pixelator = new Pixelator(window, canvas, { type: "image", image: myFile  });
  pixelator.parent('sketch');

}

function draw(){
  image(myFile,0,0)
  text("dra.ft",100,100)
  pixelator.update();
}
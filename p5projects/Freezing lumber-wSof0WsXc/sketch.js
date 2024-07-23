let glitch
let capture 

function preload(){
  capture = loadImage("photo1.jpeg")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  glitch = new Glitch()
  glitch.loadQuality(.25);
  glitch.pixelate(10);
}

function draw() {
  background(220);
   glitch.loadImage(capture); // load existing p5.js image

/* reset bytes */
// glitch.reset(); // reset glitch to original bytes if loaded in setup
 
/* sample glitching functions */
glitch.randomBytes(7); // randomize 10 bytes
glitch.replaceBytes(100, 127); // find + replace all
  // glitch.replaceByte('7b', 'ff')
// glitch.replaceHex('ffdb00430001','ffdb004300ff'); // jpg quant table

/* build and display image */
glitch.buildImage(); // creates image from glitched data
image(glitch.image, 0, 0,capture.width,capture.height); // display glitched image
  filter(GRAY)
filter(BLUR,3)
}
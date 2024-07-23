let xoff = 0;
function setup() {
  createCanvas(400, 400);
  noLoop()        
}

function draw() {
  background(220);
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d);
  loadPixels()
  for (i = 0; i < halfImage; i++) {
    r = noise(xoff)*255
    pixels[i] = r;
    pixels[i + 1] = r;
    pixels[i + 2] = r;
    pixels[i + 3] = 255;
  }
  xoff+=0.3;
  updatePixels()
}
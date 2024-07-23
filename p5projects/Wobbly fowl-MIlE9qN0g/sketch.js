let pg;
let cam;
let r = 100;
let h = 170;
function setup() {
  createCanvas(800, 600, WEBGL);
  pgWidth = 2 * 3.14 * r;
  pg = createGraphics(pgWidth, h);
  pg.pixelDensity(4);
  cam = createCapture(VIDEO);
  cam.size(128, 128);
  // cam.hide()
  // textureWrap(REPEAT);
}

function draw() {
  background(220);


  noStroke()
  texture(cam);


  rotateY(frameCount/200)
  rotateX(frameCount/200) 
  cylinder(r,h)
}

function updateTexture() {}

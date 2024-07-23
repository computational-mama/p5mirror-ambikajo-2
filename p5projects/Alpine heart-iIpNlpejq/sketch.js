let zoom;
let tp;

function preload() {
  zoom = loadImage("zoom.png")
  tp = loadFont("SpaceMono-Regular.ttf")
}

function setup() {
  createCanvas(400, 400);
  textFont(tp)
  textSize(40)
}

function draw() {
  background(220);
  
  for (i = 0; i < width; i += 80) {
    image(zoom, i, 0, zoom.width / 10, zoom.height / 10)
  text("nudes in the classroom",100,i)
  }
}
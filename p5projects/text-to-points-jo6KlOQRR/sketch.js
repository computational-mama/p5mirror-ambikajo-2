let font;
function preload() {
  font = loadFont('SpaceMono-Bold.ttf');
}

let points;
let bounds;
function setup() {
  createCanvas(700, 400);
  stroke(0);
  fill(255, 104, 204);

  points = font.textToPoints('CODING WITH FRIENDS', 0, 0, 60, {
    sampleFactor: 3,
    simplifyThreshold: 0
  });
  bounds = font.textBounds(' CODING WITH FRIENDS ', 0, 0, 10);
}

function draw() {
  background(255);
  // beginShape(POINTS);
  // translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
  translate(0,height/2)
  for (let i = 0; i < points.length; i+=20) {
    let p = points[i];
    circle(p.x,p.y,10)  
    // vertex(
    //   p.x ,
    //   p.y 
    // );
  }
  // endShape(CLOSE);
}
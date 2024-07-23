p5.disableFriendlyErrors = true;
let inc = 0.05;

function setup() {
  createCanvas(400, 400);
  // colorMode(HSL)
  // noiseSeed(1);
  // noLoop()
}

function draw() {

  let y = 0
  background(255);
  noStroke()
  // strokeWeight(10)

  for (j = 0; j < height; j++) {
    let x = 0
    // c= random(255)
    for (i = 0; i < width; i++) {
      // noiseDetail(8, 0.5);
      c = noise(x,yvgf        d)*255
      fill(c)
      if (x!=y){
      rect(i * 20, j * 10,15,5)
      }
      x += inc
    }
    y += inc
  }
}
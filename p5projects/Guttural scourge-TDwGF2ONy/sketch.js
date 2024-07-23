function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
    let y = 0
  background(255);
  // noStroke()
  strokeWeight(7)
noiseDetail(8, 0.65);
  // console.log(noise(x))
  for (j = 0; j < height; j++) {
    let x = 0
    for (i = 0; i < width; i++) {
      w = noise(x,y)
      wc = w * 255
      stroke(wc)
      point(i* 6,j * 6)
    x += 0.03
    }
  y += 0.03
  }
}
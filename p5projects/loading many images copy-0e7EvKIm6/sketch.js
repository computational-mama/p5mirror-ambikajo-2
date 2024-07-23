let img = [];
let c;
let x = 0;

function preload() {
  for (i = 0; i < 4; i++) {
    c = 'IMG_037' + i + '.jpeg'
    console.log(c)
    img = loadImage(c)
    // console.log(img.length)
  }
}

function setup() {
  createCanvas(400, 400);
  // noLoop()
}

function draw() {
  background(220);
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 2; j++) {
      image(img[i], i * 100, j*200, 100, 200)
    }
  }
}
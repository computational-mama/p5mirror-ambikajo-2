let roff = 0.03;
let xoff = 0;
let rad;
let r;
let a = 0;
let theShader;



function setup() {
  createCanvas(1280, 720);
  // noLoop()
  
}

function draw() {


  background(142, 124, 197);

  for (x = height; x > 0; x -= 4) {
    r = sin(x / 100 + a + TWO_PI);

    n = noise(r)
    r2 = map(n, 0.4, 1, 50, 280)
    stroke(200)
    fill(142, 124, 197,155)
    
    //noFill()
    ellipse(width/2, x+100, r2, r2 * 0.6)

  }
  a += 0.008;
  textSize(120)
  text("starting",80,400)
}
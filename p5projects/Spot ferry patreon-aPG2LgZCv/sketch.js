let roff = 0.03;
let xoff = 0;
let rad;
let r;
let a = 0;
let theShader;



function setup() {
  createCanvas(1280, 720);
  noLoop()
  
}

function draw() {


  background(142, 124, 197);

  for (x = height; x > 0; x -= 12) {
    r = sin(x / 100 + a + TWO_PI);

    n = noise(r, a)
    // console.log(n)
    r2 = map(n, 0.4, 1, 140, 590)
    r3 = map(n, 0.4, 1, 130, 680)
    //noStroke()
    stroke(200)
    fill(142, 124, 197,100)
    
    //noFill()
    ellipse(400, x, r2, r2 * 0.6)
    ellipse(200,x+200, r2, r2* 0.6)
    ellipse(600, x+500, r3, r3* 0.6)
  }
  a += 0.03;
}
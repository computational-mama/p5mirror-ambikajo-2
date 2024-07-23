let roff = 0.03;
let xoff = 0;
let rad;
let r;
let a = 0;
let theShader;



function setup() {
  createCanvas(400, 400);
  // noLoop()
  
}

function draw() {


  background(142, 124, 197);

  for (x = height; x > 0; x -= 3) {
    r = sin(x / 100+a)*100;

    n = noise(r)
    r2 = map(n, 0.4, 1, 100, 10)
    stroke(200,60)
    // strokeWeight(r2/20)
    fill(142, 124, 197,155)
    
    //noFill()
    ellipse(width/2, x+100, r, r * 0.6)

  }
  a += 0.008;
}
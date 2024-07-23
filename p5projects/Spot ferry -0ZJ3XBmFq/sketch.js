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


  background(250, 100, 40);

  for (x = height; x > 0; x -= 2) {

    r = sin(x / 100 + a + TWO_PI);

    n = noise(r, a)
    // console.log(n)
    r2 = map(n, 0.4, 1, 40, 290)
    //noStroke()
    stroke(200,100)
    fill(255,103,10,100)
    
    //noFill()
    ellipse(200, x, r2, r2 * 0.6)
   ellipse(100,x+100, r2, r2*n,100)
    ellipse(300, x+100, r2*r, r2*0.6,100)
  }
  a += 0.03;
  //shader(theShader);
  //rect(0,0,width, height);
  //console.log(r)
}
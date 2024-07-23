let myfont;
let pnts;
let x = 0;

function preload() {
  myfont = loadFont("Ancho-Bold.ttf")
}

function setup() {
  createCanvas(750, 400, WEBGL);
  textFont(myfont)
  textSize(46)
  pnts = myfont.textToPoints('be prepared', 10, 100, 76, {
    sampleFactor: 0.8,
  });
  // console.log(pnts)
}

function draw() {
  background(220);
  // fill(30,200,190)
  stroke(20, 100)
  translate(-100,0,0)
  for (i = 0; i < pnts.length; i++) {
    n = map(noise(i + x), 0, 1, 0, 10)
    s = sin(n)
    rotateX(s/100)
    p = pnts[i]
    ellipse(p.x + s, p.y + s, 3, 3)
  
  }
  x += 0.03

}
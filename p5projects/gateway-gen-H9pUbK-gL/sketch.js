let x;
let y;
let i;
function setup() {
  // put setup code here
  createCanvas(1000, 800)
  noLoop()
  // frameRate(6)
  // createP("")
}

function draw() {
  // put drawing code here
  background(255)
  stroke(200)
  // jhaR(0,0 )
  for (i = 0; i < width; i += 70) {
    c = random(150, 255)
    a = random(0, 150)
    fill(c, 255, 0, 100, a)
 
    jhaR(i, random(0, mouseY))
  }
}

function jhaR(x, y) {
     // scale(i)
  beginShape()
  vertex(0 + x, 300 + y)
  vertex(0 + x, 100 + y)
  bezierVertex(10 + x, 10 + y, 40 + x, 40 + y, 75 + x, 0 + y);
  bezierVertex(110 + x, 40 + y, 140 + x, 10 + y, 150 + x, 100 + y);
  vertex(150 + x, 200 + y)
     // scale(y/100)
  endShape(CLOSE);

  // rect(10+x,10+y,10+x/10,10+y/10)
  rect(140 + x, 10 + y, 10 + x / 10, y)
  
}

function mouseDragged() {

  // save('myCanvas.jpg');
  redraw()
}

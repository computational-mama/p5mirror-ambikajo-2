function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width/2,height/2)
  beginShape()
  for (a = 0; a < 4*TWO_PI; a += 0.1) {
    let n = map(mouseX,0,width,1,7)
    let d = map(mouseY,0,height,1,9)
    let k = n/7
    let r = cos(k*a)*100;
    x = r * cos(a);
    y = r * sin(a);
    vertex(x,y)
  }
  endShape()
}

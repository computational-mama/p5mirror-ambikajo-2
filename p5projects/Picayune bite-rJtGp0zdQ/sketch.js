let a;

function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {
  
  //translate(width / 2, height / 2);
  strokeWeight(0.3);
  fill(255,170, 190);
  
  blob(200, 200, 100);



}


function blob(xl, yl, r) {
  beginShape();
  this.xl = xl;
  this.yl = yl;
  this.r = r;
  for (a = 0; a < TWO_PI; a += 0.09) {
    let x = xl + r * cos(a + frameCount / 100);
    let y = yl + r * sin(a + (noise(a) / 4) + (frameCount / 100));
    vertex(x, y);
  }
  endShape(CLOSE);
}
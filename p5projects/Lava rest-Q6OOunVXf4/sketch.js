
function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  ad = frameCount/1500
  orbitControl()
  background(220);
  for (a = 0; a < TWO_PI; a += 0.5) {
    x = cos(a) *  10
    y = sin(a) * 10
// rotateX(x)
    rotateY(y+ad)
    rect(10,10,100,100)
  }

}
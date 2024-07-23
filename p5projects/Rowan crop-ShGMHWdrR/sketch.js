function setup() {
  createCanvas(400, 400,WEBGL);
}

function draw() {
  background(220);
  normalMaterial()
  x = frameCount*0.1
   rotate(20+x)
  // sphere(30)
  translate(20+x,0)
  sphere(40)
  translate(20+x,0)
  sphere(50)
  sphere(60)
}
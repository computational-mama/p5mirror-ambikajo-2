let g;

function setup() {
  createCanvas(400, 400,WEBGL);
  g = createGraphics(100,100)
  g.background(100)
}

function draw() {
  background(220);
  orbitControl()
  let x = map(mouseX,0,width,0,g.width)
  let y = map(mouseY,0,height,0,g.height)
  g.circle(x,y,20)
  g.square(g.width/2,g.height/2,20)
  // image(g,100,100)
  rotateY(PI/3)
  rotateX(-PI/3)
  texture(g)
  box(100)
}
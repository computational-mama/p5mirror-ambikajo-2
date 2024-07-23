let theShader

function preload(){
  theShader = loadShader('uniform.vert','uniform.frag')
}

function setup() {
  createCanvas(400, 400,WEBGL);
  noStroke()
}

function draw() {
  background(220);
  shader(theShader)
  rect(0,0,width,height)
}
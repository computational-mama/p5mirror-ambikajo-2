let myfont;

function preload(){
  myfont = loadFont("Roboto-Black.ttf")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textFont("Poppins")
  textSize(30)
  text("workshop is going on and we are learning about text",100,mouseY,100,290)
}
let photo;
let x = 0;

function preload(){
  photo = loadImage("photo.png")
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER)
}

function draw() {
  background(220);  
  image(photo,mouseX,mouseY,128,72)
}
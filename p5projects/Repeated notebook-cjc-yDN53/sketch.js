let dino
let y = 0
let yspeed = 1.5
let xpos, ypos; // Starting position of shape
let ydirection =1 
function preload(){
  dino = loadImage('dinopix.png')
}

function setup() {
  createCanvas(150, 150);
  imageMode(CENTER)
  xpos = width/2
  ypos = height/2
}

function draw() {
  background(255,50);
  
 ypos = ypos + yspeed * ydirection;
 if (ypos > height - 60 || ypos < 60) {
    ydirection *= -1;
  }

  image(dino,xpos,ypos,120,120)
}

function mousePressed() {
saveFrames('out', 'png', 2, 7);
}
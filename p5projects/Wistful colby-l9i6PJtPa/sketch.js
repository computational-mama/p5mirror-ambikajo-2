let t = "";

function setup() {
  createCanvas(400, 400); 
  
}

function draw() {
   background(220);
   textSize(20)
   fill(255,100,200)
  if(mouseX<width/2){
    t = "hello"
  } else {
    t = "hi"
  }
  loadFont('Space Mono')
   text(t,100,100,100,400)
}
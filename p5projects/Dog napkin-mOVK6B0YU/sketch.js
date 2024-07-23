let x=0

function setup() {
  createCanvas(400, 400);
  frameRate(4)
  rectMode(CENTER)
}

function draw() {
  background(220);
  for(i=0;i<width;i++){
    if(i%5 == 3){
      fill(200,0,0)
      circle(i*25,100,20)

    } else {
      fill(0,0,200)
      circle(i*25,100,20)
    }
  }
}
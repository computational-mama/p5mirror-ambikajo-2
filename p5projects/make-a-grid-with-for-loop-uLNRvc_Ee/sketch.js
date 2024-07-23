function setup() {
  createCanvas(400, 400);
  noLoop()
}

function draw() {
  background(220);
  
  fill(150,100)
  
  noStroke()
  for(x=0;x<400;x+=50){
    for(y=0;y<400;y+=50){
      rect(x,y,45,45)
    }
  }

  
}
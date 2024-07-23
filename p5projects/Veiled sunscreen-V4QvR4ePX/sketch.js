function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(219, 210, 167);
  fill(10)
  // noStroke()
  for(i=0;i<width;i+=10){
    

      rect(i,0,5,35)
      rect(i,height-35,5,35)
      rect(0,i,35,5) 
      rect(width-35,i,35,5) 
      
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(i=50;i<= width-50;i+=10){
strokeWeight(2)
    if(i >= 50 && i < 100){
      stroke(255,0,0)
    } else {
    stroke(20)
    }
    line(50,i,width-50,i)
    for(j=50;j<=height-100;j+=50){
      if(j>=50 && j<100){
    stroke(255,0,0)
      } else {
         stroke(0) 
      }
      line(i,j,i,j+50)
    }
    
  }
}
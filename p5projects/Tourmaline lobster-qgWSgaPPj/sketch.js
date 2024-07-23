function setup() {
  createCanvas(400, 400);
  textFont("Space Mono")
  textSize(200)
  textAlign(CENTER)
}

function draw() {
  background("#B279E5");
  for(i=height;i>0;i--){
    fill(100+i*20)
     text("CwF",width/2+3,i*70+70) 
  }
}
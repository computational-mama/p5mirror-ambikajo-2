function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  background(220);
  for(i=0;i<width;i++){
    h = i%10;
    rect(i*2,0,2,h*20);
  }
}
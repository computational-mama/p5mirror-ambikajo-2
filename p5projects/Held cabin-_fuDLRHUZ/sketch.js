function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(i=0;i<width;i+=60){
    rect(i,100,50)
  }
  line(0,200,width,200)
}
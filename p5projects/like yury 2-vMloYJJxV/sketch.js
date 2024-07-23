let c = ["#d62828","#f77f00","#fcbf49","#eae2b7"]

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES)
  noLoop()
}

function draw() {
  background('#003049');
  noFill()
  translate(width/2,height/2)
  for(i=0;i<width/2;i+=18){
    stroke(random(c))
    strokeWeight(random(5,18))
    arc(0,0,i*2,i*2,random(0,360),random(0,360))
  }
}
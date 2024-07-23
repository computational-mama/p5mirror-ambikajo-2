function setup() {
  createCanvas(400, 400);
  noLoop()
}

function draw() {
  background(220);
 noStroke()
 for(i=0;i<width;i++){ 
 let r = random(0,20)
  rect(i*5,100+r,4,100+r)
 }
}
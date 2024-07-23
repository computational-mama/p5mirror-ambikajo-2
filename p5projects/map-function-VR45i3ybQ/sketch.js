function setup() {
  createCanvas(400, 400);
  noLoop()
}

function draw() {
  background(220);
  for(a=0;a<20;a++){
    // fill(a)
    c = map(a,0,20,0,255)
    noStroke()
    print(c)
    fill(c)
    rect(a*20,100,15,15)
  }
  
}
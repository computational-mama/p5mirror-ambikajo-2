function setup() {
  createCanvas(400, 400);
  noLoop()
}

function draw() {
  background(220);
  for (let x=0; x<400; x+=3){
    h = random (150,160)
    stroke (124, 93, 140)
    line (x,300,x,h)
  }
  
  for (let x=0; x<100; x+=7){
    stroke (124, 93, 140)
    line(x,300,0,150)
  }
  
  for (let s=400; s>=100; s-=7){
    stroke (124, 93, 140)
    line(s,300,400,150)
  }
}
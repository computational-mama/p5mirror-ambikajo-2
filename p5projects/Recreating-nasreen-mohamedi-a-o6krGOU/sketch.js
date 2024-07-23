function setup() {
  createCanvas(400, 500);
  strokeCap(SQUARE);
  // noLoop()
}

function draw() {
  background(230,220,200);
  for (x = 0; x < width/4; x += 4) {  
    let sW = 25 / x
    strokeWeight(sW)
    stroke(150,x*50)
    push()
    line(150 - x*2, x, width+100 - (x*4), x*1.1)
    pop()
    push()
    translate(0,width/4)
    line(150 - x*2, x, width+100 - (x*4), x*1.2)
    pop()
    push()
    translate(0,width/2)
    line(150 - x*2, x, width+100 - (x*4), x*1.3)
    pop()
     push()
    translate(0,width-width/4)
    line(150 - x*2, x, width+100 - (x*4), x*1.4)
    pop()     
    push()
    translate(0,width-width/4)
    line(150 - x*2, x, width+100 - (x*4), x*1.5)
    pop()
  }
}
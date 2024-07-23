let arr = ["poetry", "class", "method", "boredom"] 
function setup() {
  createCanvas(400, 400);
  noLoop()
}

function draw() {
  background(220)
  for(i=0;i<width;i+=150){
    for(j=0;j<height;j+=150){
    house()
  }
  }
}

function house(){
  noStroke()
  fill(255)
 triangle(100+i,100+j,150+i,50+j,200+i,100+j)
  rect(100+i,100+j,100,50)
  // fill(100)
  // for(x=0;x<4;x++){
  //   rect(100+x+i,10,10,10)
  // }
}
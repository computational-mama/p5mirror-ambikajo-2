let cellSize = 40

function setup() {
  createCanvas(1280, 720);
  angleMode(DEGREES)
  pixelDensity(4)
  noLoop()
}

function draw() {
  background(100,120,220);
  for(i=0;i<width;i+=cellSize){
    for(j=0;j<height;j+=cellSize){
    listCell = random([drawCellA,
    drawCellB])
      strokeWeight(sin(i/4)*5)
      stroke(i/200,220,100)
      listCell(i,j)

    }
  }
  
}

function drawCellA(x,y){
  push()  
  noFill()
  translate(x,y)
  arc(0,0,cellSize,cellSize,0,90)
  arc(cellSize,cellSize,cellSize,cellSize,180,270)
  pop()
}

function drawCellB(x,y){
  push()
  noFill()
  translate(x,y)
  arc(cellSize,0,cellSize,cellSize,90,180)
  arc(0,cellSize,cellSize,cellSize,270,360)
  pop()
}
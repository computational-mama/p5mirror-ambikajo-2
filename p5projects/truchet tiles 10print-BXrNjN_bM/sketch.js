let cellSize = 20

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  noLoop()
}

function draw() {
  background(220);
  for(i=0;i<width;i+=cellSize){
    for(j=0;j<height;j+=cellSize){
    listCell = random([drawCellA,
    drawCellB])
      listCell(i,j)
      
    }
  }
}

function drawCellA(x,y){
  push()  
  noFill()
  translate(x,y)
  rotate(frameCount)
  line(0,0,cellSize,cellSize)
  
  pop()
}

function drawCellB(x,y){
  push()
  noFill()
  translate(x,y)
  line(cellSize,0,0,cellSize)
  pop()
}
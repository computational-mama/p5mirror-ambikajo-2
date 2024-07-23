let yoff = 0

function setup() {
  createCanvas(400, 400);
noLoop()
  // console.log()
}

function draw() {
  background(220);
  for (y = 0; y < height; y++) {
    line(10,y*5,50,y*5)
  }

}
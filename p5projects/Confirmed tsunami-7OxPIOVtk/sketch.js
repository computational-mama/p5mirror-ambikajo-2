function setup() {
  createCanvas(400, 400);
    background(220);
}

function draw() {

  for (x = 0; x < width; x += 10) {
  for (y = 0; y < height; y += 10) {
      sa = map(mouseX,0,width,0,255)
      sb = map(mouseY,0,height,0,255)
    // stroke()
    noStroke()
  fill(sa,sb,10)
  rect(mouseX,mouseY,50,8)
  }
    // console.log(x,c)
  }


}
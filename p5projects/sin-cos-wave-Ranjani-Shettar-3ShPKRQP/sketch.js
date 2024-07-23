let angle = 0;

function setup() {
  createCanvas(600, 400);
  // frameRate(8)
  noLoop()
  textSize(32)
}

function draw() {
  background(220);

  stroke(100,200,29)
  // translate(width / 2, height / 2)
  let offsetY = 0;
  for (x = 0; x < width; x++) {
    a = angle + offsetY;
    x1 = x*10
    y = map(sin(a), -1, 1, 0, height);

     ellipse(x1,y,10,10)
     ellipse(x1+15,y+15,5,5)
     ellipse(x1+8,y+10,8,8)

    offsetY += 0.2;
  }
    angle +=0.001;

}
let walker;
function setup() {
  createCanvas(400, 400);
  walker = new Walker(0,0)
}

function draw() {
  background(220);
  translate(width/2,height/2)
  walker.update()
  walker.show()
}
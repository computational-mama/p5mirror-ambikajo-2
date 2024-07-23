function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if(mouseX < width / 2) {
      fill(255, 0, 0);
      a = 100
    } else {
      fill(0, 0, 255);
      a = 200
    }
   noStroke();
   circle(200, 200, a);
  }
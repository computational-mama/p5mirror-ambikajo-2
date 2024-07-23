function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(249, 228, 183);
  noStroke();
  for (x = 40; x < width-40; x += 10) {
      rect(x,0,8,40);
      rect(x,360,8,40)
      rect(0,x,40,8)
      rect(width-40,x,40,8)
    
  }

}
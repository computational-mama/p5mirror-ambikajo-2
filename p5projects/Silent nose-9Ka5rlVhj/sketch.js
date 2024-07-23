function setup() {
  createCanvas(400, 400);
   for (i = 0; i <64; i++) {
  console.log(i % 16)
   }
}

function draw() {
  background(220);

  strokeWeight(5)

  let y = 180;
  for (i = 0; i < 64; i++) {
    let x = 45 + i * 5;
    let mod = i%16
    if (i % 16 < 8) {
      //green
      stroke(10, 250, 10,150)
    } else {
      //blue
      stroke(10, 10, 200,150)
    }
    line(x+4, y+mod, x+4, mod);

  }
}
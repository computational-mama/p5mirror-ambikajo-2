function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(255);
  strokeWeight(2)

  for (a = 50; a <= width - 50; a += 10) {
    if (a >= 50 && a <= 125) {
      stroke(255, 100, 0)
    } else if (a > 125 && a <= 200) {
      stroke(0, 0, 255) 
    } else if (a > 200 && a <= 275) {
      stroke(0, 255, 255)
    } else {
      stroke(255, 255, 0)
    }
    line(a, 50, a, height - 50)
  }
  

  for (b = 50; b <= height - 50; b += 10) {
    // if (b >= 50 && b <= 150) {
    //   stroke(255, 100, 0)
    // } else if (b > 150 && b <= 250) {
    //   stroke(0, 0, 255)
    // } else {
    //   stroke(0, 0, 0)
    // }
    stroke(0, 0, 0)
    strokeWeight(1)
    line(50, b, width - 50, b)
  }


}
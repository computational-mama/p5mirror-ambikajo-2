x = 100

function setup() {
  createCanvas(400, 400);
  // frameRate(6)
  noLoop()
}

function draw() {
  background(0);
 // fill(0);
 //  noStroke();
 //  rect(90,50,height-180,width-100);
 //  rect(50,90,height-100,width-180);
  translate(width / 2, height / 2)
fill(238, 228, 210)
  noStroke()
  rect(-170,-130,350,260)
  rect(-130,-170,260,350)
  for (a = 0; a < 28; a++) {
    rotate(PI / 28)
    stroke(0)
    strokeWeight(2)
    line(0, 0, 130, 0);
    cir()

    rotate(PI / 28)


  }
}

function cir() {
  fill(0)
  noStroke()
  circle(140, 0, 28)
  if (x >= 140) {
    x--
  } else {
    x = 160
  }
  fill(238, 228, 210)
  noStroke()
  circle(x, 0, 28)
}
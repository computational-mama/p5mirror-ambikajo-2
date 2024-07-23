function setup() {
  createCanvas(1280, 720);
  strokeCap(ROUND)
}

function draw() {
  background(55,200,200);
  translate(width / 2, height);
  stroke(240, 100, 20, 100);

  branch(200);
}

function branch(br) {
  // push()
  let d = PI/5.5
  // console.log(d)
  strokeWeight(4);
  line(0, 0, 0, -br);
  translate(0, -br);
  // pop()
  if (br > 12) {
    push();
    rotate(d);
    branch(br * 0.82);
    pop();
    push();
    rotate(-d);

    branch(br * 0.62);
    pop();
  }
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(140, 50, 42);
  noStroke()
  for (let a = 0; a < 400; a += 100) {
    for (let b = 0; b < 400; b += 10) {
      fill(217, 162, 130)
      rect(a, b, 60, 2);
      }
  }
  for(let c=0;c<height;c+=20){
    fill(0)
    rect(0,c,400,2)
  }

}

// {
        // for (let d = 50; d < 350; d +=50) {
        //   for (let c = 50; c < 350; c += 10) {
        //     fill (245, 72, 72)
        //     rect (c, d, 50, 1)
        //   }
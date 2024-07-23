let s =10
function setup() {
  createCanvas(400, 400);

}

function draw() {

  background(20);
  noStroke()
  for (let a = 10; a < 400; a += 50) {
    for (let b = 10; b < 400; b += 50) {
      if(a>100 || s<30){
        s++
      
      } else {
        s=0
      }
        rect(a, b, s, s);
    }


  }

}
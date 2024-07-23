function setup() {
  createCanvas(400, 600);
  noLoop()
}

function draw() {
  background(255);
  noStroke()
  for (a = 0; a < width; a++) {
    for (b = 0; b < height; b++) {
      //draw rect at a == even number 
      if (a % 2 == 0) {
        //fix to get the color at 
        if (b  % 2 == 0) {
          //pink
          fill(240, 100, 180)
        } else if (b % 3 == 0) {
          //violet-ish
          fill(240, 140, 240)
        } else{
          //orange
          fill(250,140, 140)
        }
        //draw the rectangles starting at 0,0
        rect(a * 10, b * 100, 11, 100)
      } else {
        if (b  % 2 == 0){
          fill(0, 180, 250,190)
        } else if (b  % 3 == 0) {
          fill(250, 200, 237,190)
        } else {
          fill(140,250,220,190)
        }
        //draw rectanglaes starting 0,50
        rect(a * 10, b * 100+50, 10, 100)
      }

    }
  }
}

//like this  https://www.instagram.com/p/CaQNenfNUjY/?utm_medium=share_sheet

let c = ["#42bcf5", "#2248a8", "#eb9d17"];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background("#02217d");
  noStroke();
  translate(width / 2, height / 2);
  let outerR = 185;
  for (i = 0; i < 1440; i += 30) {

    for (j = 0; j < outerR; j += 30) {
      fill(random(c));
      
//       rotate(random(15, 30));
//       rect(0, j - 30, j / 35, 50);
      
      rotate(random(15, 30));
      rect(0, j - 30, j / 20, 50);
      
      rotate(random(15, 30));
      rect(0, j - 20, j / 35, random(15,25));
    }
    
    for (k = 0; k < outerR; k += 30) {
      fill(random(c));
      
      rotate(random(15, 30));
      rect(0, k - 30, k / 15, random(15,25));
  }
}
}

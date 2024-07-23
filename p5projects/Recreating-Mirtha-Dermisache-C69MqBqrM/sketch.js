// let arr = ["a", "b", "c", "d", "e", "f", "g","h","i","j","k", "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let start = 0;


function setup() {
  createCanvas(400, 400);
  //noLoop()
  //frameRate(10)
}

function draw() {
  background(220,100,29,10);
  stroke(11,10)
  noFill()
  //fill(200,29,90)
  brach()
}

function brach(){
  let aoff = start;
   let aoff2 = start;
  beginShape(TRIANGLE_STRIP)
  for (x = -100; x < width; x += 20) {
    let ny =  noise(sin(aoff,start) * 450)
     y = height / 2 * ny +100;

   //ellipse(x, this.y+10, ny*10);
   // ellipse(y, x+10, ny*10);
    vertex(x,y);
    //vertex(x,y2);
  endShape()
    
    aoff += 0.01
  }
    beginShape(TRIANGLE_STRIP)
  for (x2 = -100; x2 < width; x2 += 20) {
    let ny2 =  noise(cos(aoff2,start) * 450)
     y2 = ny2 *200;

   //ellipse(x, this.y+10, ny*10);
   // ellipse(y, x+10, ny*10);
    vertex(x2,y2);
    //vertex(x,y2);
  endShape()
    aoff2 += 0.3
  }
  start += 0.00005

}

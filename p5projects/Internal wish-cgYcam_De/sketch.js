function setup() {
  createCanvas(600, 200);
   background(255);
}

function draw() {
 
  strokeWeight(1)
  line(mouseX,mouseY,mouseX,mouseY+100)
  line(100,60,mouseX,mouseY+100)

}
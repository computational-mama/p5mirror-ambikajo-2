//this exercise day 1 of the session with ambika

function setup() {
  createCanvas(700, 700);
  background(220);
  frameRate(14)
  // angleMode(DEGREES)
 // strokeWeight(6)
}

function draw() {
  // stroke(2,190,200,100)
  // fill(255,10)
  // line(mouseX, 10+frameCount*100, 300, 20)
  translate(width/2, height/1)
  rotate(PI/10*frameCount)
  rect(0,0,10,100)
  rect(0,100,10,100)
  ellipse(220,200,frameCount/10,10)
  rect(100,400,10,100)
}
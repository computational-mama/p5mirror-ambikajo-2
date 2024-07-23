let angle = 0;
  function setup() {
  createCanvas(400, 400);
  frameRate(10);
  background(39,38,35);
  angleMode(DEGREES)
}

function draw() {
  
  // stroke(250);
  
  // fill(39,38,35);
  // stroke(39,38,35);

  noFill()
  rect(50,80,300,240);
  rect(80,50,240,300);
  
  stroke(235,213,179);
  //translate(width/2,height/2);
  //rotate(PI / 30);
  translate(200,200);
  rotate(angle);
  line(0,0,100,100);
  circle(100,100,20)
  angle=angle+1;
  
}
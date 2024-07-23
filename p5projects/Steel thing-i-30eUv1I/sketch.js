
function setup() {
  createCanvas(400, 400);
  frameRate(4)
    

  
}

function draw() {
  background(220);
  let y = random(1,width)
  let x = random(1,width)
  fill(x,y,100)
  circle(100,200,40)
}
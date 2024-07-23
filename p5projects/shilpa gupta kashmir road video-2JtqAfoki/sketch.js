let vid;
let x=0; 
function setup() {
  createCanvas(400, 400)
  vid = createCapture(VIDEO)
  vid.size(320, 240)
  vid.hide()
}

function draw() {
    background(220,100);

  
  // image(vid, 0, 0)
  // sinx = 200*sin(x)
  fill(0)
  rect(0,0,320,240)
  for(a=0;a<TWO_PI;a+=0.03){
   
    x = floor(50*cos(a))
    y= floor(50*sin(a))
  copy(vid,mouseX,mouseY,x,y,mouseX,mouseY,x,y)
  // rect
  }
}
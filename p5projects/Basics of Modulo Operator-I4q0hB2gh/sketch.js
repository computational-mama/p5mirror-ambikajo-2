function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(let x = 0; x < 8;x++){
  if(x%2==0){
    fill(255,190,190)
  } else {
    fill(190,190,255)
  }
    h = x%4;
    rect(x*50,100,50,h*50)
  }
}
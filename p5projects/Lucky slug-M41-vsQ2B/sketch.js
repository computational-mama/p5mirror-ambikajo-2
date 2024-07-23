let vid
let x= 0
let a= 0
function setup() {
  createCanvas(400, 400);
  vid = createCapture(VIDEO)
  vid.hide()
  
}

function draw() {
  background(220);
  // image(vid,0,0)
  for(y=0;y<height;y++){
  x = floor(sin(y+a)*10)
    
  copy(vid,0,y*50,width,50,x,y*50,width,50)
 
  //x++
      a+=0.03
  }

  
  
}